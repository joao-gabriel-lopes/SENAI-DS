DROP DATABASE IF EXISTS MERCEARIA;

CREATE DATABASE MERCEARIA;

USE MERCEARIA;

CREATE TABLE PRODUTOS(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    NOME VARCHAR(100) NOT NULL,
    DESCRICAO TEXT NULL,
    PRECO DECIMAL(8, 2) NOT NULL
);

INSERT INTO PRODUTOS (NOME, DESCRICAO, PRECO) 
VALUES
    ("Pão francês", "Pão fresquinho direto do forno", 0.2),
    ("Pão de queijo", "Pão de queijo mineiro original", 0.5),
    ("Café", "Pacote de café 500g", 20),
    ("Presunto", "Presunto fatiado 200g", 15),
    ("Queijo muçarela", "Queijo muçarela fatiado 200g", 18);