import { GetActiveClassRepository } from "../../repositories/get-active-class";
import { CustomError } from "../customError/CustomError";

export class CasesActiveClass {
  constructor( 
     private getActiveClassRepository: GetActiveClassRepository
  ){}

  async execute( request: string ) {

    const nameClass = request;

    // if ( numberModules === 0 || numberModules > 6 ){
    //   throw new CustomError("Esta turma ainda não esta ativa ou não existe.", 409)
    // }

    return await this.getActiveClassRepository.get(nameClass);
  };
};