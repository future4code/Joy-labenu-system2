import express from "express";

import { apiCreateStudent } from "./endpoints/StudentsApis/apiCreateStudent";
import { apiGetStudent } from "./endpoints/StudentsApis/apiGetStudents";

import { apiCreateClass } from "./endpoints/ClassApis/apiCreateClass";
import { apiActiveClassStudent } from "./endpoints/ClassApis/apiActiveClass";

export const routes = express.Router();

routes.get("/students", apiGetStudent)
routes.post("/students", apiCreateStudent);

routes.get("/class", apiActiveClassStudent)
routes.post("/class", apiCreateClass);
