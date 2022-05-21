import { CreateStudentsRepository } from "../../repositories/create-students-repository";
import { CustomError } from "../customError/CustomError";

import { currentDate } from "../../adapters/convertAmericanDate";

import { checkSpace, validateEmail } from "../../adapters/validateEmail";

interface SendCreateUserCaseRequest {
  id: string
  name: string
  email: string
  birth_date: string
  class_id: string
};

//* apiCreateStudents
export class CasesCreateStudents {
  constructor( 
     private createStudentsRepository: CreateStudentsRepository
  ){}

  async execute( request: SendCreateUserCaseRequest) {
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
      throw new CustomError(`Você estar inserindo uma data que ainda não chegou. Por favor insira uma da anterior a ${currentDate}`, 400); 
    };

    await this.createStudentsRepository.create({
      id,
      name,
      email,
      birth_date,
      class_id
    });
  };
};