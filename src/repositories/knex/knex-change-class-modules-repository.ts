import {  ConnectionDatabase } from "../../data/connection/ConnectionDatabase";
import { ChangeClassModulesRepository, GetDataIdsClassAndModules } from "../change-class-modules-repository";

const connection = new ConnectionDatabase();

export class KnexChangeClassModulesRepository implements ChangeClassModulesRepository {

  async handleClassModules({ idClass, modules  }: GetDataIdsClassAndModules ) {
   await connection.getConnection()("Class").where("id", idClass).update("modules", modules); 
  };
};