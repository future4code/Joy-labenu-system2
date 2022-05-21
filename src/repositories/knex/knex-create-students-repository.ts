import {  ConnectionDatabase } from "../../data/connection/ConnectionDatabase";
import { CreateStudentsData, CreateStudentsRepository } from "../create-students-repository";

const connection = new ConnectionDatabase();

//* apiCreateStudent. Também ira ser botada no construtor da CasesCreateStudents
export class KnexCreateStudentsRepository implements CreateStudentsRepository {
 async create({ id, name, email, birth_date, class_id }: CreateStudentsData) {
  await connection.getConnection()("Students").insert({
          id,
          name,
          email,
          birth_date,
          class_id
      });
  };
};