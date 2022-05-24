//* Contratos

export  interface CreateTeacherData {
  id: string
  name: string
  email: string
  birth_date: string
  class_id: string
}

//* Implements Knex && Cases Create Students
export interface CreateTeacherRepository {
  create: ( data: CreateTeacherData ) => Promise<void>;
};