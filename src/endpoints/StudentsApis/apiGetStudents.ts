import{ Request, Response } from "express";
import { KnexGetStudentsRepository } from "../../repositories/knex/knex-get-student-name-repository";
import { CasesGetStudents } from "../../class/Students/GetStudentName";
import { CustomError } from "../../class/customError/CustomError";

export const apiGetStudent = async ( req: Request, res: Response ) => {
 try {

  const userName: string = req.query.name as string ?? "%";

  const knexGetStudentsRepository = new KnexGetStudentsRepository();

  const casesGetStudents = new CasesGetStudents(
    knexGetStudentsRepository
  );

  const listStudents: Array<any> = await casesGetStudents.execute(userName);

  if( listStudents.length === 0 ){
    throw new CustomError(`Usuário: "${userName}" não encontrado.`, 404)
  }

  return res.status(200).json({ listStudents: listStudents });
 } catch  ( error ) {
        if ( error instanceof CustomError ) {
          return res.status(error.statusCode || 500).send(error.message)
        } else {
          return res.status(500).send( error || error.sqlMessage)
      };
   };
};
