#LABOOK

O LaBook será uma rede social com o objetivo de promover a conexão e interação entre seus mais diversos usuários. Os usuários podem criar posts de dois tipos ("evento" ou "normal"), comentá-los e curti-los também. O desenvolvedor do frontend acha que é bastante experiente; dessa forma, já preparou uma lista de todos os endpoints que serão necessários para o projeto e foi adiantando o desenvolvimento enquanto você não chegava. Mas, alguns dos endpoints acabaram por ser feitos na pressa e estão um tanto desestrurados, e sem nenhum tipo de tratamento ou modelagem de dados. Seguem listados abaixo:

**Endpoints a se organizar:**

-1. Cadastrar
  
    Para o cadastro nessa rede social, o usuário deve fornecer seu nome, seu e-mail e uma senha. 
    
-2. Criar post

    O post deve ser criado, passando-se as informações de: foto, descrição, data de criação e tipo ("normal" ou "evento").
    
-3. Buscar um post por id 

    Ao passar o id de um post, você deve obter as informações a respeito daquele post

**Endpoints a se criar:**

-4. Fazer amizade
    
    Criar uma amizade é simples: basta receber o Id do usuário com o qual se deseja fazer amizade. 
    
    Uma amizade é uma "relação mútua": quando um usuário vira amigo de outro, esse outro "já é amigo" desse primeiro usuário (ou seja, o segundo usuário não precisa virar amigo do outro depois)
    
    **Não há a necessidade de "aceitar" uma amizade.**
    
-5. Desfazer Amizade
    
    Encerrar uma amizade segue o mesmo fluxo de fazer: com o id do usuário, já é possível realizar esse processo.
    
    Observação: você deve retornar um erro caso o usuário tente desfazer uma amizade com alguém com quem não tem essa amizade registrada no banco!
    
-6. Ver todo o Feed
    
    O feed é composto por todos os posts dos amigos do usuário. Os posts devem ser retornado em ordem de criação: do mais recente ao mais antigo.