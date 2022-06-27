export class CustomError extends Error {
    constructor(status: number, message: string) {
        super(message)
    }
}

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