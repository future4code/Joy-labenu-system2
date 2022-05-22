import { GetActiveClassRepository } from "../../repositories/get-active-class";

export class CasesActiveClass {
  constructor( 
     private getActiveClassRepository: GetActiveClassRepository
  ){}

  async execute( request: string ) {

    const nameClass = request;

    return await this.getActiveClassRepository.get(nameClass);
  };
};