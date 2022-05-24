import{ Request, Response } from "express";
import { KnexChangeClassTeacherDataRepository } from "../../repositories/knex/knex-change-class-teacher";
import {  CasesChangeClassTeacher } from "../../business/Teachers/ChangeClassTeacher";
import { CustomError } from "../../business/CustomError/CustomError";

export const apiChangeClassTeacher = async ( req: Request, res: Response ): Promise<{}> => {
 try {

  const { 
    teacherId, 
    classId
  } = req.body;

  const knexChangeClassTeacherDataRepository = new KnexChangeClassTeacherDataRepository();

  const changeClassTeacher = new CasesChangeClassTeacher(
    knexChangeClassTeacherDataRepository
  );

  await changeClassTeacher.execute({
    teacherId, 
    classId
  });

  return res.status(201).json({ message: `Professor mudou para turma desejada.` });

 } catch  ( error ) {
        if ( error instanceof CustomError ) {
          return res.status(error.statusCode || 500).send(error.message)
        } else {
          return res.status(400).send(error.sqlMessage || error.message)
      };
   };
};