CREATE TABLE person(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(50) NOT NULL
);

INSERT INTO person(name, country) VALUES ('Peter', 'Ecuador'),
('Juanito', 'Peru'),
('Perez', 'Chile'),
('Bayron', 'Argentina'),
('Brayan', 'Brazil'),
('Francisca', 'Mexico');