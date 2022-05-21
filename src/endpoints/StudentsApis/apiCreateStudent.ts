import{ Request, Response } from "express";
import { KnexCreateStudentsRepository } from "../../repositories/knex/knex-create-students-repository";
import { CasesCreateStudents } from "../../class/Students/CreateStudents";
import { convertAmericanDate } from "../../adapters/convertAmericanDate";
import { CustomError } from "../../class/CustomError/CustomError";

const { v4: uuidv4 } = require('uuid');

export const apiCreateStudent = async ( req: Request, res: Response ): Promise<{}> => {
 try {

  const { 
    name,
    email,
    birthDate,
    classId
  } = req.body;

  const knexCreateStudentsRepository = new KnexCreateStudentsRepository();

  const casesCreateStudents = new CasesCreateStudents(
    knexCreateStudentsRepository
  );

  await casesCreateStudents.execute({
    id: uuidv4(),
    name,
    email,
    birth_date: convertAmericanDate(birthDate),
    class_id: classId
  });

  return res.status(201).json({ message: `Usário ${name} criado com sucesso` });
 } catch  ( error ) {
        if ( error instanceof CustomError ) {
          return res.status(error.statusCode || 500).send(error.message)
        } else {
          return error.code === "ER_DUP_ENTRY" ? res.status(409).send(error.sqlMessage) : res.status(500).send(error.sqlMessage);
      };
   };
};