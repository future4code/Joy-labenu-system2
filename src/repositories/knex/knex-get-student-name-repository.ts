import {  ConnectionDatabase } from "../../data/connection/ConnectionDatabase";
import { GetStudentsRepository } from "../get-students-name-repository";

const connection = new ConnectionDatabase();

export class KnexGetStudentsRepository implements GetStudentsRepository {
  async get( name: string) {
    const listStudents = await connection.getConnection()("Students").where("name", "like", `%${name}%`);
    return listStudents;
  };
};
