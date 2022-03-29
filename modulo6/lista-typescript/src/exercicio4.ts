enum SECTORES {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINCANCEIRO = "financeiro"
}

type Employees = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}

const employeesList: Employees[] = [
    { nome: "Marcos", salário: 2500, setor: SECTORES.MARKETING, presencial: true },
	{ nome: "Maria" , salário: 1500, setor: SECTORES.VENDAS, presencial: false},
	{ nome: "Salete", salário: 2200, setor: SECTORES.FINCANCEIRO, presencial: true},
	{ nome: "João", salário: 2800, setor: SECTORES.MARKETING, presencial: false},
	{ nome: "Josué", salário: 5500, setor: SECTORES.FINCANCEIRO, presencial: true},
	{ nome: "Natalia", salário: 4700, setor: SECTORES.VENDAS, presencial: true},
	{ nome: "Paola", salário: 3500, setor: SECTORES.MARKETING, presencial: true }
]

const marketingEmployeesHomeOffice: Employees[] = 
    employeesList.filter((employees) => {
        return (
            employees.setor == SECTORES.MARKETING && employees.presencial == true
        )
    })

    console.log(marketingEmployeesHomeOffice)