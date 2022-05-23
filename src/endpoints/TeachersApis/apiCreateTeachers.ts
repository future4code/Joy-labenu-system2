import{ Request, Response } from "express";
import { KnexCreateTeachersRepository } from "../../repositories/knex/knex-create-teachers-repository";
import {  CasesCreateTeachers } from "../../class/Teachers/CreateTeachers";
import { convertAmericanDate } from "../../adapters/convertAmericanDate";
import { CustomError } from "../../class/CustomError/CustomError";

const { v4: uuidv4 } = require('uuid');

export const apiCreateTeacher = async ( req: Request, res: Response ): Promise<{}> => {
 try {

  const { 
    name,
    email,
    birthDate,
    classId
  } = req.body;

  const knexCreateTeachersRepository = new KnexCreateTeachersRepository();

  const casesCreateTeachers = new CasesCreateTeachers(
    knexCreateTeachersRepository
  );

  await casesCreateTeachers.execute({
    id: uuidv4(),
    name,
    email,
    birth_date: convertAmericanDate(birthDate),
    class_id: classId
  });

  return res.status(201).json({ message: `Professor ${name} criado com sucesso.` });
 } catch  ( error ) {
        if ( error instanceof CustomError ) {
          return res.status(error.statusCode || 500).send(error.message)
        } else {
          return error.code === "ER_DUP_ENTRY" ? res.status(409).send(error.sqlMessage) : res.status(500).send(error.sqlMessage);
      };
   };
};