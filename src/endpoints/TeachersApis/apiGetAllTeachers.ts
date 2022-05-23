import { Request, Response } from "express";
import { KnexGetAllTeachersRepository } from "../../repositories/knex/knex-get-all-teachers-repository";
import { CasesGetAllTeachers } from "../../class/Teachers/GetAllTeachers";

import { CustomError } from "../../class/CustomError/CustomError";


export const apiGetAllTeachers = async ( req: Request, res:Response ): Promise<{}> => {
  try {

    const knexGetAllTeachersRepository = new KnexGetAllTeachersRepository();

    const casesGetAllTeachers = new CasesGetAllTeachers(
      knexGetAllTeachersRepository
    ) ;

    const teachersList = await casesGetAllTeachers.execute();

    return res.status(200).json({ teachers: teachersList });

  } catch ( error ) {
    if( error instanceof CustomError ){
      return res.status(error.statusCode || 500).send(error.message);
    } else {
      return res.status(500).send(error.sqlMessage);
    }
  }
};