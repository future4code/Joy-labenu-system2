import { GetStudentsRepository } from "../../repositories/get-students-name-repository";
import { CustomError } from "../customError/CustomError";

export class CasesGetStudents {
  constructor( 
     private getStudentsRepository: GetStudentsRepository
  ){}

  async execute( request: string ) {

    const userName = request

    return await this.getStudentsRepository.get(userName);
  };
};