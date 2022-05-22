import { ChangeClassStudentRepository } from "../../repositories/change-class-student-repository";
import { CustomError } from "../CustomError/CustomError";

interface RequestCasesChangeClassStudent {
  studentId: string
  idClass: string
};

export class CasesChangeClassStudent {
  constructor( 
     private changeClassStudentRepository: ChangeClassStudentRepository
  ){}

  async execute( request: RequestCasesChangeClassStudent ) {

    const { studentId, idClass } = request;

    if ( !studentId || !idClass ) {
      throw new CustomError("Alguma informação esta faltando ou esta incorreta. Por favor consulte a documentação.", 400);
    }

    await this.changeClassStudentRepository.handleClass({ studentId, idClass });

  };
};