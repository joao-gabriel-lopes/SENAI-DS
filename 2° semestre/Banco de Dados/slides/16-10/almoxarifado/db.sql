-- Remove o banco se já existir
DROP DATABASE IF EXISTS ALMOXARIFADO;

-- Cria o banco
CREATE DATABASE ALMOXARIFADO;

-- Usa o banco
USE ALMOXARIFADO;

-- Tabela LOCALIZACAO
CREATE TABLE LOCALIZACAO (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR(100) NOT NULL,
    DESCRICAO TEXT
);

-- Tabela CATEGORIA
CREATE TABLE CATEGORIA (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    LOCALIZACAO_ID INT NOT NULL,
    NOME VARCHAR(100) NOT NULL,
    DESCRICAO TEXT,
    FOREIGN KEY (LOCALIZACAO_ID) REFERENCES LOCALIZACAO(ID)
);

-- Tabela ITEM_ESTOQUE
CREATE TABLE ITEM_ESTOQUE (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    CATEGORIA_ID INT NOT NULL,
    NOME VARCHAR(150) NOT NULL,
    DESCRICAO TEXT,
    QUANTIDADE_MINIMA INT NOT NULL,
    CODIGO VARCHAR(50) NOT NULL,
    NOME_IMAGEM VARCHAR(100),
    FOREIGN KEY (CATEGORIA_ID) REFERENCES CATEGORIA(ID)
);

-- Inserção dos dados em LOCALIZACAO
INSERT INTO LOCALIZACAO (NOME, DESCRICAO) VALUES
('Prateleira A3', 'Seção de ferramentas'),
('B7-C2', 'Materiais elétricos');

-- Inserção dos dados em CATEGORIA
INSERT INTO CATEGORIA (LOCALIZACAO_ID, NOME, DESCRICAO) VALUES
(1, 'Parafusos', 'Parafusos diversos'),
(2, 'Ferramentas', 'Ferramentas manuais');

-- Inserção dos dados em ITEM_ESTOQUE
INSERT INTO ITEM_ESTOQUE (CATEGORIA_ID, NOME, DESCRICAO, QUANTIDADE_MINIMA, CODIGO, NOME_IMAGEM) VALUES
(1, 'Parafuso Sextavado 5mm', 'Parafuso sextavado de aço carbono com 5mm de diâmetro e 20mm de comprimento. Revestimento zincado para maior resistência à corrosão.', 1250, 'PSX-005', 'parafuso.png'),
(2, 'Chave de Fenda Phillips', 'Chave de fenda com ponta Phillips tamanho #2. Cabo ergonômico antiderrapante para melhor conforto e segurança durante o uso.', 18, 'CFP-102', 'chavephilips.png'),
(1, 'Tinta Spray Vermelha', 'Tinta spray vermelha de alta cobertura. Secagem rápida, resistente à intempéries. Ideal para uso em metal, madeira e plástico.', 7, 'TSV-300', 'tintavermelha.png'),
(2, 'Lixa D''Água 600', 'Lixa d''água grão 600 para acabamento fino. Pode ser usada com água para melhor desempenho e menos entupimento dos grãos.', 42, 'LDA-600', 'lixa.png'),
(1, 'Fita Isolante Preta', 'Fita isolante preta de PVC, 10m de comprimento e 19mm de largura. Resistente a altas temperaturas e excelente isolamento elétrico.', 23, 'FIP-010', 'fitaisolante.png'),
(2, 'Broca para Concreto 6mm', 'Broca para concreto com ponta de metal duro. Diâmetro de 6mm e comprimento total de 110mm. Ideal para perfuração em concreto e alvenaria.', 5, 'BRC-006', 'brocaconcreto.png'),
(1, 'Cola Epóxi 50g', 'Cola epóxi bicomponente em bisnaga de 50g. Tempo de cura de 5 minutos. Resistente a água, óleos e produtos químicos após cura.', 14, 'CEP-050', 'colaepoxi50g.png'),
(2, 'Luvas de Proteção', 'Luvas de proteção em látex com textura antiderrapante. Tamanho médio, resistentes a produtos químicos e perfurações.', 32, 'LVP-001', 'luvasproteção.png');