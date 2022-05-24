//* Contratos
export interface GetStudentsRepository {
  get: ( name: string  ) => Promise<any[]>;
};