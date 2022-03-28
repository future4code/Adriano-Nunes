type User = {
    name: string,
    email: string,
    role: string
}

const listUser: User[] = [
    {name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"} 
]

const adminUser: User[] = 
    listUser.filter((user) => {
        return (
            user.role == "admin"
        )
    })

const emailAdminUser = adminUser.map((email) => {
    return (
        email.email
    )
})

console.log(emailAdminUser)
