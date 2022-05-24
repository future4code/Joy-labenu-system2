//* Contratos

export  interface CreateClassData {
  id: string
  name: string
  modules?: number
}

export interface CreateClassRepository {
  create: ( data: CreateClassData ) => Promise<void>;
};