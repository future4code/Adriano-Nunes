import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

//Exercício 1
//A)
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    console.log(await getActorById(id))
    res.end()

  } catch (error: any) {
   console.log(error.message)
    res.status(500).send("Unexpected error")
  } 
})

//B)
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}

app.get("/actor/name", async (req: Request, res: Response) => {
  try {
    const name = req.body.name
    console.log(await searchActor(name))
    res.end()

  } catch (error: any) {
   console.log(error.message)
    res.status(500).send("Unexpected error")
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