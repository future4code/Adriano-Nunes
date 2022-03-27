function user (
    name: string,
    bday: string
) : string {
    const seperateBday: string[] = bday.split("/")
    return `Olá me chamo ${name}, nasci no dia ${seperateBday[0]}, do mês de ${seperateBday[1]}, do ano de ${seperateBday[2]}`
}

console.log(user("Adriano", "03/04/1992"))