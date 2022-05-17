import { connection } from "../connection/connection"
import classPop from "./classPop.json"
import teachersPop from "./teachersPop.json"
import studentsPop from "./studentsPop.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
      CREATE TABLE IF NOT EXISTS Class (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         modules INT NOT NULL DEFAULT 0
      );

      CREATE TABLE IF NOT EXISTS Students (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         birth_date DATE NOT NULL,
         class_id VARCHAR(255) NOT NULL,
         FOREIGN KEY(class_id) REFERENCES Class(id)
      );

      CREATE TABLE IF NOT EXISTS Teachers (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         birth_date DATE NOT NULL,
         class_id VARCHAR(255) NOT NULL,
         FOREIGN KEY(class_id) REFERENCES Class(id)
      );

      CREATE TABLE IF NOT EXISTS Hobby (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) UNIQUE NOT NULL
      );

      CREATE TABLE IF NOT EXISTS Students_Hobby (
         id VARCHAR(255) PRIMARY KEY,
         students_id VARCHAR(255) NOT NULL,
         hobby_id VARCHAR(255) NOT NULL,
         FOREIGN KEY(students_id) REFERENCES Students(id),
         FOREIGN KEY(hobby_id) REFERENCES Hobby(id)
      );

      CREATE TABLE IF NOT EXISTS Specialties (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) UNIQUE NOT NULL
      );

      CREATE TABLE IF NOT EXISTS Teachers_Specialties (
         id VARCHAR(255) PRIMARY KEY,
         teacher_id VARCHAR(255) NOT NULL,
         specialty_id VARCHAR(255) NOT NULL,
         FOREIGN KEY(teacher_id) REFERENCES Teacher(id),
         FOREIGN KEY(specialty_id) REFERENCES Specialty(id)
      );
`)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertClass = () => connection("Class")
   .insert(classPop)
   .then(() => { console.log("Turma criada!") })
   .catch(printError)

const insertTeachers = () => connection("Teachers")
   .insert(teachersPop)
   .then(() => { console.log("Professores criados!") })
   .catch(printError)

   const insertStudents = () => connection("Students")
   .insert(studentsPop)
   .then(() => { console.log("Estudantes criados!") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertClass)
   .then(insertTeachers)
   .then(insertStudents)
   .finally(closeConnection)

