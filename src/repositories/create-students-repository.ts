//* Contratos

export  interface CreateStudentsData {
  id: string
  name: string
  email: string
  birth_date: string
  class_id: string
}

//* Implements Knex && Cases Create Students
export interface CreateStudentsRepository {
  create: ( data: CreateStudentsData ) => Promise<void>;
};