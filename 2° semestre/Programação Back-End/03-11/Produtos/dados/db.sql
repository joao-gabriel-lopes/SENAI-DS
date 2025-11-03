CREATE DATABASE ALMOXARIFE;

USE ALMOXARIFE;

CREATE TABLE CATEGORIAS(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    NOME VARCHAR(100) NOT NULL
);

CREATE TABLE PRODUTOS(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    ID_CATEGORIA INT NOT NULL,
    NOME VARCHAR(100) NOT NULL,
    DESCRICAO TEXT,
    FORNECEDOR VARCHAR(100),
    QUANTIDADE INT NOT NULL,
    NOME_IMAGEM VARCHAR(50),

    FOREIGN KEY (ID_CATEGORIA) REFERENCES CATEGORIAS(ID)
);

INSERT INTO CATEGORIAS(NOME)
VALUES("Alimentos"), ("Inflamáveis"), ("Metais"), ("Eletrodomésticos");

INSERT INTO PRODUTOS(ID_CATEGORIA, NOME, DESCRICAO, FORNECEDOR, QUANTIDADE, NOME_IMAGEM)
VALUES 
(1, "Batata", "Batata asterix", "Seu zé", 2000, "batata.png"),
(2, "Álcool isopropílico", "Álcool 80%", "Empresa A", 100, "alcool.png"),
(3, "Chapa de aço", "Chapa de aço carbono com nióbio", "Fábrica B", 1000, "chapa.png"),
(4, "Air fryer", "1001 utilidades e difícil de limpar", "Indústria C", 500, "air_fryer.png");