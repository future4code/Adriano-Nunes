import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());


app.post("/user", async (req: Request, res: Response) : Promise<void> => {
   const createUserName = req.body.name;
   const createUserNickName = req.body.nickname;
   const createUserEmail = req.body.email

    if(!createUserName) {
        res.status(401).send("Nome do Usuário é obrigatório!")
    }

    if(!createUserNickName) {
        res.status(401).send("NickName do Usuário é obrigatório!")
    }

    if(!createUserEmail) {
        res.status(401).send("Email do Usuário é obrigatório!")
    }

    try {
        await connection("Users")
        .insert({
            name: createUserName,
            nickname: createUserNickName,
            email: createUserEmail
        })
        res.status(201).send({ message: "Usuário Criado com Sucesso!" })
    } catch (error: any) {
        res.status(500).send(error.message)        
    }

})

app.get("/user/:id", async (req: Request, res: Response) : Promise<void> => {
    try {
        const getUserId = await connection("Users")
        .where ({ 
            id: req.params.id 
        })

        res.status(200).send(getUserId)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})


app.put("/user/edit/:id", async (req: Request, res: Response) : Promise<void> => {
    const editUserName = req.body.name;
    const editUserNickName = req.body.nickname;
    const editUserEmail = req.body.email
 
     if(editUserName === "") {
         res.status(401).send("Nome do Usuário deve ser preenchido!")
     }
 
     if(editUserNickName === "") {
         res.status(401).send("NickName do Usuário deve ser preenchido!")
     }
 
     if(editUserEmail === "") {
         res.status(401).send("Email do Usuário deve ser preenchido!")
     }
 
     try {
         await connection("Users")
         .update({ 
             name: editUserName,
             nickname: editUserNickName,
             email: editUserEmail
         })
         .where({
             id: req.params.id
         })
         res.status(201).send({ message: "Usuário Editado!" })
     } catch (error: any) {
         res.status(500).send(error.message)        
     }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app