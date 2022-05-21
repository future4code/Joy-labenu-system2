import express, { Request, Response } from "express";

import { apiCreateStudent } from "./endpoints/apiCreateStudent";
import { apiGetStudent } from "./endpoints/apiGetStudents";
import {  ConnectionDatabase } from "./data/connection/ConnectionDatabase";

export const routes = express.Router();

const connection = new ConnectionDatabase()

routes.get("/students", apiGetStudent)
routes.post("/students", apiCreateStudent);

// async ( req: Request, res: Response) => {
//   const name = req.query.name
//   const j = await connection.getConnection()("Students").where("name", "like", `%${name}%`);
//   res.status(200).json(j)
// }