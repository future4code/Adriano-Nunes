import { CustomError, UserNotAdded, UserNotFound } from "../error/customErros";
import { user } from "../model/User";
import { BaseDataBase } from "./baseDataBase";

export class UserDataBase extends BaseDataBase {
    public insertUser =async (user: user) => {
        try {
            await UserDataBase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            })
            .into("cookenu_users")
        } catch (error: any) {
            throw new UserNotAdded();
        }
    }

    public searchUser = async (id: string) => {
        try {
            const result = await UserDataBase.connection("cookenu_users")
            .select(
                "id",
                "name",
                "email" 
            )
            .where({ id });
            return result;
        } catch (error: any) {
            throw new UserNotFound();
        }
    }

    // public searchFriend = async (id: string) => {
    //     try {
    //         const result = await UserDataBase.connection("cookenu_users")
    //         .select(
    //             "id",
    //             "name",
    //             "email" 
    //         )
    //         .where({ id });
    //         return result;
    //     } catch (error: any) {
    //         throw new UserNotFound();
    //     }
    // }
}