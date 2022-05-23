export class CustomError extends Error {
  statusCode: number;
  sqlMessage?: string;

  constructor( message: string, statusCode: number, sqlMessage?: string){
    super(message)
    this.statusCode = statusCode
    this.sqlMessage = sqlMessage
  };
};

