import { CreateTeacherRepository } from "../../repositories/create-teachers-repository";
import { CustomError } from "../CustomError/CustomError";

import { currentDate } from "../../adapters/convertAmericanDate";

import { checkSpace, validateEmail } from "../../adapters/validateEmail";

interface SendCreateTeacherCaseRequest {
  id: string
  name: string
  email: string
  birth_date: string
  class_id: string
};

export class CasesCreateTeachers {
  constructor( 
     private createTeacherRepository: CreateTeacherRepository
  ){}

  async execute( request: SendCreateTeacherCaseRequest) {
    const { 
      id,
      name,
      email,
      birth_date,
      class_id
    } = request;

    if ( !name || !email || !birth_date || !class_id ) { 
      throw new CustomError("Alguma informação está faltando. Consulte a documentação.", 400); 
    };

    if ( checkSpace(email) ) { 
      throw new CustomError(`O email: "${email}" não pode conter espaços em branco.`, 400); 
    };

    if ( validateEmail(email) === false ) { 
      throw new CustomError(`O email: "${email}" não segue o formato valido. Ex: ${name}@gmail.com`, 400); 
    };

    if ( birth_date > currentDate ) { 
      throw new CustomError(`Você estar inserindo uma data que ainda não chegou. Por favor insira uma data anterior a ${currentDate}`, 400); 
    };

    await this.createTeacherRepository.create({
      id,
      name,
      email,
      birth_date,
      class_id
    });
  };
};