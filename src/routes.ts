import express from "express";

import { apiCreateStudent } from "./endpoints/StudentsApis/apiCreateStudent";
import { apiGetStudent } from "./endpoints/StudentsApis/apiGetStudents";
import { apiChangeClassStudent } from "./endpoints//StudentsApis/apiChangeClassStudent";

import { apiCreateClass } from "./endpoints/ClassApis/apiCreateClass";
import { apiActiveClassStudent } from "./endpoints/ClassApis/apiActiveClass";
import {  apiChangeClassModules } from "./endpoints/ClassApis/apiChangeClassModules";


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
