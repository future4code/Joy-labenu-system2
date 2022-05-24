import { ChangeClassModulesRepository } from "../../repositories/change-class-modules-repository";
import { CustomError } from "../CustomError/CustomError";

interface RequestCasesChangeClassModules {
  idClass: string
  modules: number
};

export class CasesChangeClassModules {
  constructor( 
     private changeClassModulesRepository: ChangeClassModulesRepository
  ){}

  async execute( request: RequestCasesChangeClassModules ) {

    const { idClass, modules } = request;

    if ( modules < 1 || modules > 6 || !modules  ) {
      throw new CustomError("Os modulos escolhidos só podem ser de 1 a 6.", 400);
    };

    await this.changeClassModulesRepository.handleClassModules({ idClass, modules });

  };
};