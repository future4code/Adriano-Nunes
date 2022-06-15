import * as jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()

export class Authenticator {
  
    public generateToken = (playload: AuthenticationData) => {
        const token = jwt.sign(
            playload, 
            process.env.JWT_KEY as string,
            { expiresIn: "1hr"}
           )
        
            return token;
    }

    public getTokenData = (token: string) => {
        const playload = jwt.verify(token, process.env.JWT_KEY as string)
        return playload
    }

}

type AuthenticationData = {
  id: string;
}