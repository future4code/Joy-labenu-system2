//* Contratos

export interface ChangeClassTeacherData {
  id: string
  classId: string
};

export interface ChangeClassTeacherRepository {
  change: ( data: ChangeClassTeacherData ) => Promise<void>;
};