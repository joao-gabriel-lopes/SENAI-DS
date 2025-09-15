<?php
require_once '../Modelos/PessoaFisica.php';
require_once '../Modelos/PessoaJuridica.php';

$pessoas = [
    new PessoaFisica("João da Silva", "(11) 91234-5678", "Rua das Flores, 123 - São Paulo, SP", "1985-03-22", "Masculino", "123.456.789-00"),
    new PessoaFisica("Maria Oliveira", "(21) 99876-5432", "Av. Brasil, 456 - Rio de Janeiro, RJ", "1990-07-15", "Feminino", "987.654.321-00"),
    new PessoaFisica("Carlos Souza", "(31) 98765-4321", "Rua Minas Gerais, 789 - Belo Horizonte, MG", "1978-11-05", "Masculino", "111.222.333-44"),
    new PessoaFisica("Ana Lima", "(85) 99812-3344", "Rua Fortaleza, 99 - Fortaleza, CE", "1992-12-08", "Feminino", "555.666.777-88"),
    new PessoaFisica("Pedro Henrique", "(41) 98888-7777", "Av. Curitiba, 22 - Curitiba, PR", "1988-04-10", "Masculino", "333.444.555-66"),
    new PessoaJuridica("Empresa XPTO Ltda", "(11) 4002-8922", "Rua Comercial, 1000 - São Paulo, SP", "2005-06-01", "12.345.678/0001-99"),
    new PessoaJuridica("Tech Solutions SA", "(19) 3232-3232", "Av. Tecnológica, 900 - Campinas, SP", "2010-09-20", "98.765.432/0001-11"),
    new PessoaJuridica("AgroVale ME", "(67) 3344-5566", "Rodovia MS-040, km 12 - Campo Grande, MS", "2015-03-30", "44.555.666/0001-00"),
    new PessoaJuridica("Construtora Forte Ltda", "(31) 2222-1111", "Rua da Construção, 321 - BH, MG", "2000-01-15", "22.333.444/0001-55"),
    new PessoaJuridica("Comércio Bom Preço", "(71) 3000-0000", "Av. Salvador, 111 - Salvador, BA", "1999-11-11", "77.888.999/0001-33")
];
