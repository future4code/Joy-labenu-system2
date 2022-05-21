import{ Request, Response } from "express";
import { KnexCreateClassRepository } from "../../repositories/knex/knex-create-class-repository";
import { CasesCreateClass } from "../../class/Class`s/CreateClass";
import { CustomError } from "../../class/customError/CustomError";

const { v4: uuidv4 } = require('uuid');

export const apiCreateClass = async ( req: Request, res: Response ) => {
 try {

  let { 
    name,
    modules
  } = req.body;

  if ( !modules ) {
    modules = 0
  }

  const knexCreateClassRepository = new KnexCreateClassRepository();

  const casesCreateStudents = new CasesCreateClass(
    knexCreateClassRepository
  );

  await casesCreateStudents.execute({
    id: uuidv4(),
    name,
    modules
  });

  return res.status(201).json(`Classe ${name} criada com sucesso.`);
 } catch  ( error ) {
        if ( error instanceof CustomError ) {
          return res.status(error.statusCode || 500).send(error.message)
        } else {
          return res.status(500).send(error.sqlMessage || error)
      };
   };
};