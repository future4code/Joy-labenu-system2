import{ Request, Response } from "express";
import { KnexGetActiveClassRepository } from "../..//repositories/knex/knex.get-active-class";
import { CasesActiveClass } from "../../class/Class`s/GetActiveClass";
import { CustomError } from "../../class/customError/CustomError";

export const apiActiveClassStudent = async ( req: Request, res: Response ) => {
 try {

  const nameClass = req.query.name as string;

  const knexGetActiveClassRepository = new KnexGetActiveClassRepository();

  const casesActiveClass = new CasesActiveClass(
    knexGetActiveClassRepository
  );
  const listActiveClass: any[] = await casesActiveClass.execute(nameClass);

   let activeNull: any

    for( let classActiveNull of listActiveClass ){
      if ( classActiveNull?.modules === 0 || classActiveNull?.modules > 6 ){
        activeNull = false
      };
    };

    if ( listActiveClass.length === 0 ){
      throw new CustomError("Turma não encontrada", 409)
    };

    if ( activeNull === false ) {
      throw new CustomError("Esta turma não existe.", 409)
    };

  return res.status(200).json(listActiveClass);
 } catch  ( error ) {
        if ( error instanceof CustomError ) {
          return res.status(error.statusCode || 500).send(error.message)
        } else {
          return res.status(500).send( error || error.sqlMessage)
      };
   };
};