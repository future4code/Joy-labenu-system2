import {  ConnectionDatabase } from "../../data/connection/ConnectionDatabase";
import { ChangeClassStudentRepository, GetDataIdsClassAndStudent } from "../change-class-student-repository";

const connection = new ConnectionDatabase();

export class KnexChangeClassStudentRepository implements ChangeClassStudentRepository {

  async handleClass({ studentId, idClass  }: GetDataIdsClassAndStudent ) {
   await connection.getConnection()("Students").where("id", studentId).update("class_id", idClass); 
  };
};