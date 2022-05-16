import { connection } from "./connection"
import users from "./users.json"
import recipes from "./recipes.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
      CREATE TABLE IF NOT EXISTS Class (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         teachers VARCHAR(255) NOT NULL,
         students VARCHAR(255) NOT NULL,
         modules INT NOT NULL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS Students (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         birth_date DATE NOT NULL,
         class_id VARCHAR
         FOREIGN KEY(class_id) REFERENCES Class(id),
      );
      CREATE TABLE IF NOT EXISTS aula49_recipes (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT(1023),
        user_id VARCHAR(255),
        created_at BIGINT,
        FOREIGN KEY(user_id) REFERENCES aula49_users(id) 
     );
`)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertUsers = () => connection("aula49_users")
   .insert(users)
   .then(() => { console.log("Usuários criados") })
   .catch(printError)

const insertRecipes = () => connection("aula49_recipes")
   .insert(recipes)
   .then(() => { console.log("Receitas criadas") })
   .catch(printError)

   const insertRecipes = () => connection("aula49_recipes")
   .insert(recipes)
   .then(() => { console.log("Receitas criadas") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .then(insertRecipes)
   .then(insertRecipes)
   .finally(closeConnection)

