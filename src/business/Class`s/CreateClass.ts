import { CreateClassRepository } from "../../repositories/create-class-repository";
import { CustomError } from "../CustomError/CustomError";

interface SendCreateClassCaseRequest {
  id: string
  name: string
  modules?: number
};

export class CasesCreateClass {
  constructor( 
     private createClassRepository: CreateClassRepository
  ){}

  async execute( request: SendCreateClassCaseRequest) {
    const { 
      id,
      name,
      modules
    } = request;

    if ( !name ) { 
      throw new CustomError("Alguma informação está faltando. Consulte a documentação.", 400); 
    };

    if (  typeof modules !== "number" ) { 
      throw new CustomError("O módulo tem que ser um número inteiro", 400); 
    };

    if ( modules === -1 || modules > 6 ) { 
      throw new CustomError("Escolha um módulo entre 1 e 6", 400); 
    };

    await this.createClassRepository.create({
      id,
      name,
     modules
    });
  };
};