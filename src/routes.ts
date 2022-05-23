import express from "express";

import { apiCreateStudent } from "./controllers/StudentsApis/apiCreateStudent";
import { apiGetStudent } from "./controllers/StudentsApis/apiGetStudents";
import { apiChangeClassStudent } from "./controllers//StudentsApis/apiChangeClassStudent";

import { apiCreateClass } from "./controllers/ClassApis/apiCreateClass";
import { apiActiveClassStudent } from "./controllers/ClassApis/apiActiveClass";
import {  apiChangeClassModules } from "./controllers/ClassApis/apiChangeClassModules";

import { apiGetAllTeachers } from "./controllers/TeachersApis/apiGetAllTeachers";
import { apiCreateTeacher } from "./controllers/TeachersApis/apiCreateTeachers";
import { apiChangeClassTeacher } from "./controllers/TeachersApis/apiChangeClassTeacher";


export const routes = express.Router();

//* Students Endpoints
routes.get("/students", apiGetStudent);
routes.post("/students", apiCreateStudent);
routes.put("/students", apiChangeClassStudent);

//* Classes Endpoints
routes.get("/class", apiActiveClassStudent);
routes.post("/class", apiCreateClass);
routes.put("/class/:id", apiChangeClassModules);

//* Teachers Endpoints
routes.get("/teachers", apiGetAllTeachers);
routes.post("/teachers", apiCreateTeacher);
routes.put("/teachers", apiChangeClassTeacher);
