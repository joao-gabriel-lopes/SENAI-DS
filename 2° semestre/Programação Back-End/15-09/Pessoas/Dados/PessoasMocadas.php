<?php

require_once '../Modelos/PessoaFisica.php';
require_once '../Modelos/PessoaJuridica.php';

$pessoas = [
    new PessoaFisica("João Silva", "(11) 99999-1111", "Rua das Flores, 123 - São Paulo, SP", "123.456.789-00", "1985-06-15", "Masculino"),
    new PessoaFisica("Maria Oliveira", "(21) 98888-2222", "Av. Brasil, 456 - Rio de Janeiro, RJ", "987.654.321-00", "1990-09-20", "Feminino"),
    new PessoaFisica("Carlos Souza", "(31) 97777-3333", "Rua Minas, 789 - Belo Horizonte, MG", "111.222.333-44", "1978-01-30", "Masculino"),
    new PessoaFisica("Ana Paula", "(41) 96666-4444", "Rua das Laranjeiras, 12 - Curitiba, PR", "222.333.444-55", "1992-03-18", "Feminino"),
    new PessoaFisica("Felipe Lima", "(51) 95555-5555", "Av. Ipiranga, 500 - Porto Alegre, RS", "333.444.555-66", "1980-12-05", "Masculino"),
    new PessoaFisica("Larissa Mendes", "(61) 94444-6666", "SQN 308 - Brasília, DF", "444.555.666-77", "1995-08-25", "Feminino"),
    new PessoaFisica("Bruno Rocha", "(71) 93333-7777", "Rua do Comércio, 800 - Salvador, BA", "555.666.777-88", "1987-07-10", "Masculino"),
    new PessoaFisica("Juliana Alves", "(85) 92222-8888", "Rua Fortaleza, 101 - Fortaleza, CE", "666.777.888-99", "1993-11-12", "Feminino"),
    new PessoaFisica("Eduardo Martins", "(95) 91111-9999", "Rua Central, 200 - Boa Vista, RR", "777.888.999-00", "1975-04-22", "Masculino"),
    new PessoaFisica("Camila Ferreira", "(62) 90000-0000", "Rua Goiás, 77 - Goiânia, GO", "888.999.000-11", "1998-01-01", "Feminino"),
    new PessoaJuridica("Tech Solutions LTDA", "(11) 3000-1111", "Av. Paulista, 1000 - São Paulo, SP", "12.345.678/0001-00", "2005-03-12"),
    new PessoaJuridica("Construtora Nova Era", "(21) 4000-2222", "Rua do Carmo, 234 - Rio de Janeiro, RJ", "98.765.432/0001-99", "1998-07-23"),
    new PessoaJuridica("Supermercado União", "(31) 5000-3333", "Av. Amazonas, 999 - Belo Horizonte, MG", "56.789.123/0001-45", "2010-11-05"),
    new PessoaJuridica("Editora Saber Mais", "(41) 6000-4444", "Rua das Letras, 88 - Curitiba, PR", "87.654.321/0001-87", "2001-02-19"),
    new PessoaJuridica("Hospital Vida Plena", "(51) 7000-5555", "Av. Ipiranga, 2000 - Porto Alegre, RS", "34.567.890/0001-12", "1995-06-30"),
    new PessoaJuridica("AgroTech Brasil", "(61) 8000-6666", "Zona Rural, Lote 45 - Brasília, DF", "11.222.333/0001-01", "2018-09-14"),
    new PessoaJuridica("TransLog Transportes", "(71) 9000-7777", "Rod. BR-324, Km 25 - Salvador, BA", "22.333.444/0001-20", "2003-12-01"),
    new PessoaJuridica("Academia Corpo & Saúde", "(85) 3500-8888", "Rua do Esporte, 101 - Fortaleza, CE", "44.555.666/0001-50", "2012-04-10"),
    new PessoaJuridica("Loja de Roupas FashionMix", "(95) 3600-9999", "Av. Principal, 456 - Boa Vista, RR", "66.777.888/0001-09", "2016-08-22"),
    new PessoaJuridica("Escola Crescer", "(62) 3700-0000", "Rua Goiás, 222 - Goiânia, GO", "88.999.000/0001-70", "2008-10-17")

];

?>