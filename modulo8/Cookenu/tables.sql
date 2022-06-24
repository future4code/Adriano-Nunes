CREATE TABLE cookenu_users(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL, 
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE cookenu_recipe(
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    creation_date DATE NOT NULL
);