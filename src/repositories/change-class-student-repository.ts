//* Contratos
export interface GetDataIdsClassAndStudent {
  studentId: string
  idClass: string
};

export interface ChangeClassStudentRepository{
  handleClass:( data: GetDataIdsClassAndStudent ) => Promise<void>;
};