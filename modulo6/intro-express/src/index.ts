import express, { Request, Response } from "express";
import cors from "cors"


const app = express();

app.use(express.json());
app.use(cors())

app.listen(3003, () => {
  console.log("Servidor rodando!");
});

//Exercício 1
// app.get("/", (request: Request, response: Response) => {    
//   console.log("Get ok")      
//   response.send("O Grêmio não tem Mundial, nem o Coritiba, nem o Galo!")
// });

//Exercício 2
type Users = {
  id: string,
  name: string,
  phone: number, 
  email: string,
  website: string
}

const listUser: Users[] = [
  {
    id: "1a2b",
    name: "Adriano",
    phone: 999999999, 
    email: "adriano@email.com",
    website: "www.adrianobnunes.com.br"
  }, 
  {
    id: "2e3n",
    name: "Keianne",
    phone: 988889889, 
    email: "keianne@email.com",
    website: "www.keiannedzaze.edu.br"
  },
  {
    id: "5y8d",
    name: "João Silencioso",
    phone: 985568779, 
    email: "joaosilencioso@email.com",
    website: "www.joaosilencioso.ong.br"
  }
] 