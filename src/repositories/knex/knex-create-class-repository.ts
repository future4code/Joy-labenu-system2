import {  ConnectionDatabase } from "../../data/connection/ConnectionDatabase";
import { CreateClassData, CreateClassRepository } from "../create-class-repository";

const connection = new ConnectionDatabase();

export class KnexCreateClassRepository implements CreateClassRepository {
 async create({ id, name, modules }: CreateClassData) {
  await connection.getConnection()("Class").insert({
          id,
          name,
          modules
      });
  };
};