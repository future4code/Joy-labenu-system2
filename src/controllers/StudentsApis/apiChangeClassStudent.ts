import{ Request, Response } from "express";
import { KnexChangeClassStudentRepository } from "../../repositories/knex/knex-change-class-student-repository";
import { CasesChangeClassStudent } from "../../business/Students/ChangeClassStudent";
import { CustomError } from "../../business/CustomError/CustomError";

export const apiChangeClassStudent = async ( req: Request, res: Response ): Promise<{}> => {
 try {

  const { 
    studentId,
    idClass
  } = req.body;

  const knexChangeClassRepository = new KnexChangeClassStudentRepository();

  const casesChangeClassStudent  = new CasesChangeClassStudent(
    knexChangeClassRepository
  );

 await casesChangeClassStudent.execute({ studentId, idClass });

  return res.status(201).json({ message: "Estudante atualizado de turma com sucesso." });
 } catch  ( error ) {
        if ( error instanceof CustomError ) {
          return res.status(error.statusCode || 500).send(error.message)
        } else {
          return res.status(500).send(error.sqlMessage || error)
      };
   };
};