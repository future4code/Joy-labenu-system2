import {  ConnectionDatabase } from "../../data/connection/ConnectionDatabase";
import { GetActiveClassRepository } from "../get-active-class"

const connection = new ConnectionDatabase();

export class KnexGetActiveClassRepository implements GetActiveClassRepository {
  async get( nameClass: string) {
    const listActiveClass: any = await connection.getConnection()("Class").where("name", nameClass) 
    return listActiveClass
  };
};