import { ChangeClassTeacherRepository } from "../../repositories/change-class-teacher-repository";
import { CustomError } from "../CustomError/CustomError";


interface SendChangeClassTeacher {
  teacherId: string
  classId: string
};

export class CasesChangeClassTeacher {
  constructor( 
     private changeClassTeacherRepository: ChangeClassTeacherRepository
  ){}

  async execute( request: SendChangeClassTeacher) {

    const { teacherId, classId } = request;
 
    await this.changeClassTeacherRepository.change({
      id: teacherId,
      classId
    });
  };
};