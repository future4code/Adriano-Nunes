export class CustomError extends Error {
    constructor(status: number, message: string) {
        super(message)
    }
}

export class UserNotFound extends CustomError {
    constructor() {
        super(400, "Usuário não encontrado!")
    }
}

export class UserNotAdded extends CustomError {
    constructor() {
        super(400, "Usuário não adicionado!")
    }
}

// export class FriendNotFound extends CustomError {
//     constructor() {
//         super(400, "Amigo não encontrado!")
//     }
// }

export class RequiredName extends CustomError {
    constructor() {
        super(400, "O campo NOME é obrigatório!")
    }
}

export class RequiredEmail extends CustomError {
    constructor() {
        super(400, "O campo Email é obrigatório!")
    }
}

export class RequiredPassword extends CustomError {
    constructor() {
        super(400, "O campo SENHA é obrigatório!")
    }
}

export class InvalidEmail extends CustomError {
    constructor() {
        super(400, "Email inválido!")
    }
}

export class InvalidPassword extends CustomError {
    constructor() {
        super(400, "Senha inválida!")
    }
}