import {  ConnectionDatabase } from "../../data/connection/ConnectionDatabase";
import { CreateTeacherData, CreateTeacherRepository } from "../create-teachers-repository";

const connection = new ConnectionDatabase();

//* apiCreateStudent. Também ira ser botada no construtor da CasesCreateStudents
export class KnexCreateTeachersRepository implements CreateTeacherRepository {
 async create({ id, name, email, birth_date, class_id }: CreateTeacherData) {
  await connection.getConnection()("Teachers").insert({
          id,
          name,
          email,
          birth_date,
          class_id
      });
  };
};