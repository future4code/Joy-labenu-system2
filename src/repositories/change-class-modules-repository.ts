//* Contratos
export interface GetDataIdsClassAndModules {
  idClass: string
  modules: number
};

export interface ChangeClassModulesRepository {
  handleClassModules:( data: GetDataIdsClassAndModules ) => Promise<void>;
};