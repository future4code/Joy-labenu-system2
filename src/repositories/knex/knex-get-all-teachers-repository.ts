import {  ConnectionDatabase } from "../../data/connection/ConnectionDatabase";
import { GetAllTeachersRepository } from "../get-all-teachers-repository";

const connection = new ConnectionDatabase();

export class KnexGetAllTeachersRepository implements GetAllTeachersRepository {
  async get(){
    const  allTeachers = await connection.getConnection()("Teachers").select();
    return allTeachers;
  };
};