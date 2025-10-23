CREATE DATABASE OFICINA;

USE OFICINA;

CREATE TABLE MECANICO (
    ID INT PRIMARY KEY,
    NOME VARCHAR(100)
);

CREATE TABLE VEICULO (
    ID INT PRIMARY KEY,
    PLACA VARCHAR(10),
    MODELO VARCHAR(50),
    MARCA VARCHAR(50),
    MECANICO_ID INT NULL,
    FOREIGN KEY (MECANICO_ID) REFERENCES MECANICO(ID)
);


INSERT INTO MECANICO VALUES
(1, 'Carlos Silva'),
(2, 'Fernanda Souza'),
(3, 'João Pereira'),
(4, 'Marcos Lima'),
(5, 'Patrícia Alves');  

INSERT INTO VEICULO VALUES
(101, 'ABC-1234', 'Civic', 'Honda', 1),   
(102, 'XYZ-9876', 'Corolla', 'Toyota', 2),
(103, 'JKL-5555', 'Onix', 'Chevrolet', 1),
(104, 'MNO-4321', 'Gol', 'Volkswagen', NULL), 
(105, 'PQR-2468', 'HB20', 'Hyundai', 3), 
(106, 'STU-1357', 'Palio', 'Fiat', NULL);
