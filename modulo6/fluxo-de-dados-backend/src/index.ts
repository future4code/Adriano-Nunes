import express, { Request, Response } from "express";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())

app.listen(3003, () => {
  console.log("Servidor rodando!");
});

// EXERCICIO 1
app.get("/test", (req: Request, res: Response) => {
    console.log("Teste da API ok");
    res.send("API Teste Funcionando!!!")
})