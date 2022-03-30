import express, { Request, Response } from "express";
import cors from "cors"


const app = express();

app.use(express.json());
app.use(cors())

app.listen(3003, () => {
  console.log("Servidor rodando!");
});

//Exercício 1
app.get("/", (request: Request, response: Response) => {    
  console.log("Get ok")      
  response.send("O Grêmio não tem Mundial, nem o Coritiba, nem o Galo!")
});