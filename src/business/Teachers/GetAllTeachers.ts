import { GetAllTeachersRepository } from "../../repositories/get-all-teachers-repository";


export class CasesGetAllTeachers {
  constructor(
   private getAllTeachersRepository: GetAllTeachersRepository
  ){};

  execute = async () => await  this.getAllTeachersRepository.get();
};