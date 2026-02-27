using BibliotecaClasses1;

ClassePublica publica = new();

publica.setDataNascimento(new DateOnly(2000, 2, 27));

//publica.setDataNascimento(new DateOnly(2100, 2, 27)); Causa um erro por não passar no set

//Console.WriteLine(publica.Nome); Causa um erro pois o atributo é internal

Console.WriteLine("Deu certo");
