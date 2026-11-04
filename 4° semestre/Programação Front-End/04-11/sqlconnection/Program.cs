using Microsoft.Data.SqlClient;

SqlConnection conexao = new();
conexao.ConnectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=CIRCO;Integrated Security=True;";

string opcao = "";

while (opcao != "0")
{

    Console.WriteLine(" ");
    Console.WriteLine("Circo App");
    Console.WriteLine(" ");
    Console.WriteLine("1 - Criar Colaborador");
    Console.WriteLine("2 - Excluir Colaborador");
    Console.WriteLine("3 - Criar Atração");
    Console.WriteLine("4 - Excluir Atração");
    Console.WriteLine("0 - Sair");
    Console.WriteLine(" ");

    Console.Write("Selecione a opção desejada: ");
    opcao = Console.ReadLine() ?? "";

    switch (opcao)
    {
        case "1":
            CriarColaborador();
            break;
        case "2":
            ExcluirColaborador();
            break;
        case "3":
            CriarAtracao();
            break;
        case "4":
            ExcluirAtracao();
            break;
        case "0":
            break;
        default:
            Console.WriteLine("Opção inválida!");
            Console.WriteLine("Pressione qualquer tecla para prosseguir...");
            Console.ReadKey();
            break;
    }
}


void CriarColaborador()
{
    Console.WriteLine(" ");

    Console.Write("Digite o nome do colaborador: ");
    string nome = Console.ReadLine() ?? "";

    Console.Write("Digite a idade do colaborador: ");
    int idade = int.Parse(Console.ReadLine() ?? "0");

    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "INSERT INTO COLABORADORES (NOME, IDADE) VALUES (@NOME, @IDADE)";
    comando.Parameters.AddWithValue("@NOME", nome);
    comando.Parameters.AddWithValue("@IDADE", idade);
    comando.ExecuteNonQuery();

    conexao.Close();

    Console.WriteLine(" ");
    Console.WriteLine("Colaborador inserido com sucesso!");
    Console.WriteLine("Pressione qualquer tecla para prosseguir...");
    Console.ReadKey();
}

void ExcluirColaborador()
{
    Console.WriteLine(" ");

    Console.Write("Digite o id do colaborador: ");
    int id = int.Parse(Console.ReadLine() ?? "0");

    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "DELETE FROM COLABORADORES WHERE ID = @ID";
    comando.Parameters.AddWithValue("@ID", id);
    comando.ExecuteNonQuery();

    conexao.Close();

    Console.WriteLine(" ");
    Console.WriteLine("Colaborador excluído com sucesso!");
    Console.WriteLine("Pressione qualquer tecla para prosseguir...");
    Console.ReadKey();
}

void CriarAtracao()
{
    Console.WriteLine(" ");

    Console.Write("Digite o nome da atração: ");
    string nome = Console.ReadLine() ?? "";

    Console.Write("Digite a descrição da atração: ");
    string descricao = Console.ReadLine() ?? "";

    Console.Write("Digite o id do colaborador: ");
    int colaboradorId = int.Parse(Console.ReadLine() ?? "0");

    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "INSERT INTO ATRACOES (NOME, DESCRICAO_LONGA, COLABORADOR_ID) VALUES (@NOME, @DESCRICAO, @COLABORADOR_ID)";
    comando.Parameters.AddWithValue("@NOME", nome);
    comando.Parameters.AddWithValue("@DESCRICAO", descricao);
    comando.Parameters.AddWithValue("@COLABORADOR_ID", colaboradorId);
    comando.ExecuteNonQuery();

    conexao.Close();

    Console.WriteLine(" ");
    Console.Write("Atração inserida com sucesso!");
    Console.WriteLine("Pressione qualquer tecla para prosseguir...");
    Console.ReadKey();
}

void ExcluirAtracao()
{
    Console.WriteLine(" ");

    Console.Write("Digite o id da atração: ");
    int id = int.Parse(Console.ReadLine() ?? "0");

    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "DELETE FROM ATRACOES WHERE ID = @ID";
    comando.Parameters.AddWithValue("@ID", id);
    comando.ExecuteNonQuery();

    conexao.Close();

    Console.WriteLine(" ");
    Console.Write("Atração excluída com sucesso!");
    Console.WriteLine("Pressione qualquer tecla para prosseguir...");
    Console.ReadKey();
}