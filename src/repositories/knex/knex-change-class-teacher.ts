import { ChangeClassTeacherData, ChangeClassTeacherRepository } from "../change-class-teacher-repository";
import {  ConnectionDatabase } from "../../data/connection/ConnectionDatabase";

const connection = new ConnectionDatabase();

export class KnexChangeClassTeacherDataRepository implements ChangeClassTeacherRepository {
  async change({  id, classId }: ChangeClassTeacherData) {
   await connection.getConnection()("Teachers").where("id", id).update("class_id", classId);
   };
 };