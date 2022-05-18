// EXERCÍCIO 1
// A) O construtor serve para ter ações que podem ser executadas na função. Para chama-los é através da palavra this!

// B) Nenhum

// C) Através dos GETTERS(para pegar atributos) e SETTERS(para definir)


// EXERCÍCIO 2
// A) 


class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(cpf: string, name: string, age: number) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getCpf(){
        return this.cpf;
    }

    public getName(){
        return this.name;
    }

    public getAge(){
        return this.age;
    }

    public getBalance(){
        return this.balance;
    }

    public getTransactions(){
        return this.transactions;
    }
  }

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string){
        this.description = description;
        this.value = value;
        this.date = date
    }

    public getDescription(){
        return this.description;
    }

    public getValue(){
        return this.value;
    }

    public getDate(){
        return this.date;
    }
}

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }

    public getAccounts(){
        return this.accounts;
    }
  
  }

