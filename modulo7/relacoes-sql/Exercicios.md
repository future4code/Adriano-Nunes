# Exercício 1 
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Muito bom!",
    7,
	"004"
);

ALTER TABLE Movie DROP COLUMN rating;

# Exercício 2
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "001"
)

# Exercício 3
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m