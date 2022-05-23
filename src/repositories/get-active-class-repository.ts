//* Contratos
export interface GetActiveClassRepository {
  get: ( nameClass: string ) => Promise<any>;
};