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
  website: string,
  post: Post[]
}

//Exercício 3
// const listUser: Users[] = [
//   {
//     id: "1a2b",
//     name: "Adriano",
//     phone: 999999999, 
//     email: "adriano@email.com",
//     website: "www.adrianobnunes.com.br"
//   }, 
//   {
//     id: "2e3n",
//     name: "Keianne",
//     phone: 988889889, 
//     email: "keianne@email.com",
//     website: "www.keiannedzaze.edu.br"
//   },
//   {
//     id: "5y8d",
//     name: "João Silencioso",
//     phone: 985568779, 
//     email: "joaosilencioso@email.com",
//     website: "www.joaosilencioso.ong.br"
//   }
// ] 

//Exercício 4
app.get("/users", (req: Request, res:Response) => {
    const users = listUser.map((user) => user);

    res.send(users);
})

//Exercício 5
type Post = {
  id: number,
  title: string,
  body: string,
  userId: Users["id"]
}

const listUser: Users[] = [
  {
    id: "1a2b",
    name: "Adriano",
    phone: 999999999, 
    email: "adriano@email.com",
    website: "www.adrianobnunes.com.br",
    post: [
      {
        id: 1,
        title: "Internacional",
        body: "Campeão de Tudo!",
        userId: "1a2b"
      }
    ]
  }, 
  {
    id: "2e3n",
    name: "Keianne",
    phone: 988889889, 
    email: "keianne@email.com",
    website: "www.keiannedzaze.edu.br",
    post: [
      {
        id: 1,
        title: "Pedagoga",
        body: "Melhores dicas e aulas para Educação Infantil",
        userId: "2e3n"
      }
    ]
  },
  {
    id: "5y8d",
    name: "João Silencioso",
    phone: 985568779, 
    email: "joaosilencioso@email.com",
    website: "www.joaosilencioso.ong.br",
    post: [
      {
        id: 1,
        title: "Churrasco",
        body: "A comida preferida de todos os gaúchos",
        userId: "5y8d"
      }
    ]
  }
]

//Exercicio 7
// app.get("/posts", (req: Request, res:Response) => {
//   const posts = listUser.map((post) => post);

//   res.send(posts);
// })

//Exercicio 8
app.get("/posts", (req: Request, res: Response) => {
  const userId = req.query.id

  if (!userId) {
      res.status(400).send("Informar ID do usuário")
  }

  const users = listUser.map((user) => user);

  let postUsers
  users.forEach(post => {
      if (post.id === userId) {
          postUsers = post.post
      }
  })
  res.send(postUsers)
}) 