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

//C)
const countActor = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT (*) as count FROM Actor WHERE gender = "${gender}"
  `)

  const count = result[0][0].count
  return count
  
}

//EXERCÍCIO 2
const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};

//A)
const updateActor = async (
  id: string,
  salary: number
  ) : Promise<any> => {
    await connection("Actor")
    .update({salary: salary})
    .where("id", id)
}

//B)
const deleteActor = async (
  id: string
  ) : Promise<void> => {
    await connection("Actor")
    .delete()
    .where("id", id)
}

//C)
const averageSalaryActor = async (
  gender: string
  ) : Promise<any> => {
    const resultAVG = await connection("Actor")
    .avg("salary as average")
    .where({ gender })

    return resultAVG[0].average;
}


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app