using CursoDomain;

AlunoModel aluno1 = new AlunoModel("Pedro Carvalho", 19);
AlunoModel aluno2 = new AlunoModel("Isadora Carvalho", 16);
AlunoModel aluno3 = new AlunoModel("Carlos Alberto", 70);
AlunoModel aluno4 = new AlunoModel("Enzo Silva", 4);

aluno1.CriarNota("Relatório sobre Física Nuclear", 100);
aluno1.CriarNota("Seminário sobre DNA", 0);
//aluno1.CriarNota("Tabela de biomas", 1000); //causa erro pela nota ser maior que cem
//aluno1.CriarNota("Tabela de climas", -1); //causa erro pela nota ser menor que zero
aluno2.CriarNota("Apresentação sobre termodinâmica", 55);
aluno3.CriarNota("Prova de matemática", 85);
aluno4.CriarNota("Apresentação sobre Parnasianismo", 70);

CursoModel curso = new CursoModel("Ciência da Computação", 18);

curso.MatricularAluno(aluno1);
//curso.MatricularAluno(aluno2); //causa erro pela idade ser menor que a idade mínima
curso.MatricularAluno(aluno3);
//curso.MatricularAluno(aluno4); //causa erro pela idade ser menor que a idade mínima