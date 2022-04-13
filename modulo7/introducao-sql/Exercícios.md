# EXERCÍCIO 1
a- São números que não são inteiros;

b- SHOW DATABASES lista os bancos de dados no host do servidor MySQL e SHOW TABLES listas as tabelas no BD no host;

c- confere as colunas da tabela mencionada

# EXERCÍCIO 2 
a- Info acrescido na tabela;

b- Error Code: 1062. Duplicate entry '002' for key 'PRIMARY - não pode ter 2 'id' iguais;

c- Error Code: 1136. Column count doesn't match value count at row - falta info para adicionar na tabela 

d- Erro parecido da questão acima

e-  Data está como número e na tabela está como string

# EXERCICIO 3
a- SELECT id, name FROM Actor WHERE gender = "female"

b- SELECT salary FROM Actor WHERE name = 'Tony Ramos';

c- Não retornou nada

d- SELECT id, name, salary FROM Actor WHERE salary < 500000;

e- Nome da coluna está errado. É name e não nome. 
SELECT id, name FROM Actor WHERE id = '002'

# EXERCÍCIO  4
a- A query de cima consulta as info da tabela Actor que tem nome com A ou J com salário acima de 300000. Between signfica entre valores. NOT LIKE não pode conter e NOT BETWENN valores não pode estar entre os valores mencionados;

b- SELECT name FROM Actor Where name NOT LIKE 'A%' AND salary > 350000;

c- SELECT name FROM Actor Where name LIKE "%g%";

d- SELECT name FROM Actor Where name LIKE "%g%" OR name LIKE "%a%";

# EXERCÍCIO 5
a- O tipo de dados TEXT armazena qualquer tipo de dados de texto . Ele pode conter caracteres de byte único e multibyte aos quais a localidade oferece suporte. O termo objeto grande simples refere-se a uma instância de um tipo de dados TEXT ou BYTE.;

b- CREATE TABLE Movies (
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    synopsis TEXT(500) NOT NULL,
    release_date_of DATE NOT NULL,
    assessment INT NOT NULL
);


c- INSERT INTO Movies (title, synopsis, release_date_of, assessment)
VALUES(
	'Doce de mãe',
    'Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela',
    '2012-12-27',
    10
    );

    
d- INSERT INTO Movies (title, synopsis, release_date_of, assessment)
VALUES(
	'Dona Flor e Seus Dois Maridos',
	'Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.',
    '2017-11-02',
    8
    );

    
e- INSERT INTO Movies (title, synopsis, release_date_of, assessment)
VALUES(
	'Tropa de Elite',
	'DEm Tropa de Elite, o dia-a-dia do grupo de policiais e de um capitão do BOPE (Wagner Moura), que quer deixar a corporação e tenta encontrar um substituto para seu posto. Paralelamente dois amigos de infância se tornam policiais e se destacam pela honestidade e honra ao realizar suas funções, se indignando com a corrupção existente no batalhão em que atuam..',
    '2007-10-12',
    10
    );
    
# EXERCÍCIO 6
a- SELECT id, title, assessment FROM Movies WHERE id = '004';

b-  SELECT * FROM Movies WHERE title LIKE '%Fosse%';

c- SELECT id, title, synopsis FROM Movies WHERE assessment >= 7;

# EXERCÍCIO 7 
a- SELECT * FROM Movies WHERE title LIKE '%vida%';

b- SELECT * FROM Movies WHERE title LIKE '%Elite%';

c- SELECT * FROM Movies WHERE release_date_of < now();

d- SELECT * FROM Movies WHERE title LIKE '%Doce%' AND assessment > 7;
