import * as jwt from 'jsonwebtoken'
import { authenticationData } from '../model/AuthenticationID'

export class TokenGenerator {

    public generateToken = (id: string) => {
        const token = jwt.sign(
            { id },
            process.env.JWT_KEY as string,
            { expiresIn: "1h" }
         )
        return token 
    }

    public tokenData = (token: string): authenticationData => {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as jwt.JwtPayload

        return {id: payload.id as string}
    }
}