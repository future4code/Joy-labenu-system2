import{ Request, Response } from "express";
import { KnexChangeClassModulesRepository } from "../../repositories/knex/knex-change-class-modules-repository";
import { CasesChangeClassModules } from "../../class/Class`s/ChangeClassModules";
import { CustomError } from "../../class/CustomError/CustomError";

export const apiChangeClassModules = async ( req: Request, res: Response ):  Promise<{}> => {
 try {

  const idClass: string = req.params.id as string;

  const { modules } = req.body;

  const knexChangeClassModulesRepository = new KnexChangeClassModulesRepository();

  const casesChangeClassModules  = new CasesChangeClassModules(
    knexChangeClassModulesRepository
  );

 await casesChangeClassModules.execute({idClass, modules });

  return res.status(201).json({ message: "Modulo da turma atualizado com sucesso." });
 } catch  ( error ) {
        if ( error instanceof CustomError ) {
          return res.status(error.statusCode || 500).send(error.message)
        } else {
          return res.status(500).send(error.sqlMessage || error)
      };
   };
};