using System.Data;
using Microsoft.Data.SqlClient;

SqlConnection conexao = new();
conexao.ConnectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=CIRCO;Integrated Security=True;";

string opcao = "";

while (opcao != "9")
{
    Console.WriteLine("");
    Console.ForegroundColor = ConsoleColor.Red;
    Console.Write("Circo App");
    Console.WriteLine("");
    Console.ResetColor();

    Console.WriteLine("");
    Console.WriteLine("1 - Listar Colaboradores");
    Console.WriteLine("2 - Criar Colaborador");
    Console.WriteLine("3 - Atualizar Colaborador");
    Console.WriteLine("4 - Excluir Colaborador");
    Console.WriteLine("5 - Listar Atrações");
    Console.WriteLine("6 - Criar Atração");
    Console.WriteLine("7 - Atualizar Atração");
    Console.WriteLine("8 - Excluir Atração");
    Console.WriteLine("");
    Console.WriteLine("9 - Sair");
    Console.WriteLine("");

    Console.Write("Selecione a opção desejada: ");
    opcao = Console.ReadLine() ?? "";

    switch (opcao)
    {
        case "1":
            ListarColaboradores();
            break;
        case "2":
            CriarColaborador();
            break;
        case "3":
            AtualizarColaborador();
            break;
        case "4":
            ExcluirColaborador();
            break;
        case "5":
            ListarAtracoes();
            break;
        case "6":
            CriarAtracao();
            break;
        case "7":
            AtualizarAtracao();
            break;
        case "8":
            ExcluirAtracao();
            break;
        case "9":
            break;
        default:
            Console.WriteLine("Opção inválida!");
            Console.WriteLine("Pressione qualquer tecla para prosseguir...");
            Console.ReadKey();
            break;
    }
}

void ListarColaboradores()
{
    Console.WriteLine("");

    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = $"SELECT ID, NOME, IDADE FROM COLABORADORES";
    comando.ExecuteNonQuery();

    using (SqlDataReader reader = comando.ExecuteReader())
    {
        while (reader.Read())
        {
            int id = reader.GetInt32(0);
            string nome = reader.GetString(1);
            int idade = reader.GetInt32(2);

            Console.WriteLine($"ID: {id}");
            Console.WriteLine($"Colaborador: {nome}");
            Console.WriteLine($"Idade: {idade} anos");
            Console.WriteLine($"");
        }
    }

    conexao.Close();

    Console.WriteLine("Pressione qualquer tecla para prosseguir...");
    Console.ReadKey();
}

void CriarColaborador()
{
    Console.WriteLine("");

    Console.Write("Digite o nome do colaborador: ");
    string nome = Console.ReadLine() ?? "";

    Console.Write("Digite a idade do colaborador: ");
    int idade = int.Parse(Console.ReadLine() ?? "0");

    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "INSERT INTO COLABORADORES (NOME, IDADE) VALUES (@NOME, @IDADE) ORDER BY ID";
    comando.Parameters.AddWithValue("@NOME", nome);
    comando.Parameters.AddWithValue("@IDADE", idade);
    comando.ExecuteNonQuery();

    conexao.Close();

    Console.WriteLine("");
    Console.WriteLine("Colaborador inserido com sucesso!");
    Console.WriteLine("Pressione qualquer tecla para prosseguir...");
    Console.ReadKey();
}

void AtualizarColaborador()
{
    Console.WriteLine("");

    Console.Write("Digite o id do colaborador: ");
    int id = int.Parse(Console.ReadLine() ?? "0");

    Console.Write("Digite o nome do colaborador: ");
    string nome = Console.ReadLine() ?? "";

    Console.Write("Digite a idade do colaborador: ");
    int idade = int.Parse(Console.ReadLine() ?? "0");

    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "UPDATE COLABORADORES SET NOME = @NOME, IDADE = @IDADE WHERE ID = @ID";
    comando.Parameters.AddWithValue("@NOME", nome);
    comando.Parameters.AddWithValue("@IDADE", idade);
    comando.Parameters.AddWithValue("@ID", id);
    comando.ExecuteNonQuery();

    conexao.Close();

    Console.WriteLine("");
    Console.WriteLine("Colaborador atualizado com sucesso!");
    Console.WriteLine("Pressione qualquer tecla para prosseguir...");
    Console.ReadKey();
}

void ExcluirColaborador()
{
    Console.WriteLine("");

    Console.Write("Digite o id do colaborador: ");
    int id = int.Parse(Console.ReadLine() ?? "0");

    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "DELETE FROM COLABORADORES WHERE ID = @ID";
    comando.Parameters.AddWithValue("@ID", id);
    comando.ExecuteNonQuery();

    conexao.Close();

    Console.WriteLine("");
    Console.WriteLine("Colaborador excluído com sucesso!");
    Console.WriteLine("Pressione qualquer tecla para prosseguir...");
    Console.ReadKey();
}

void ListarAtracoes()
{
    Console.WriteLine("");


    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = $"SELECT ATRACOES.ID, ATRACOES.NOME, ATRACOES.DESCRICAO_LONGA, ATRACOES.COLABORADOR_ID, COLABORADORES.NOME FROM ATRACOES JOIN COLABORADORES ON COLABORADORES.ID = ATRACOES.COLABORADOR_ID ORDER BY ID";
    comando.ExecuteNonQuery();

    using (SqlDataReader reader = comando.ExecuteReader())
    {
        while (reader.Read())
        {
            int id = reader.GetInt32(0);
            string nome = reader.GetString(1);
            string descricao = reader.GetString(2);
            int colaboradorId = reader.GetInt32(3);
            string colaboradorNome = reader.GetString(4);

            Console.WriteLine($"ID: {id}");
            Console.WriteLine($"Atração: {nome}");
            Console.WriteLine($"descrição: {descricao}");
            Console.WriteLine($"Colaborador responsável: {colaboradorId} - {colaboradorNome}");
            Console.WriteLine($"");
        }
    }

    conexao.Close();

    Console.WriteLine("Pressione qualquer tecla para prosseguir...");
    Console.ReadKey();
}

void CriarAtracao()
{
    Console.WriteLine("");

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

    Console.WriteLine("");
    Console.WriteLine("Atração inserida com sucesso!");
    Console.WriteLine("Pressione qualquer tecla para prosseguir...");
    Console.ReadKey();
}


void AtualizarAtracao()
{
    Console.WriteLine("");

    Console.Write("Digite o id da atração: ");
    int id = int.Parse(Console.ReadLine() ?? "0");    

    Console.Write("Digite o nome da atração: ");
    string nome = Console.ReadLine() ?? "";

    Console.Write("Digite a descrição da atração: ");
    string descricao = Console.ReadLine() ?? "";

    Console.Write("Digite o id do colaborador: ");
    int colaboradorId = int.Parse(Console.ReadLine() ?? "0");

    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "UPDATE ATRACOES SET NOME = @NOME, DESCRICAO_LONGA = @DESCRICAO, COLABORADOR_ID = @COLABORADOR_ID WHERE ID = @ID";
    comando.Parameters.AddWithValue("@ID", id);
    comando.Parameters.AddWithValue("@NOME", nome);
    comando.Parameters.AddWithValue("@DESCRICAO", descricao);
    comando.Parameters.AddWithValue("@COLABORADOR_ID", colaboradorId);
    comando.ExecuteNonQuery();

    conexao.Close();

    Console.WriteLine("");
    Console.WriteLine("Atração atualizada com sucesso!");
    Console.WriteLine("Pressione qualquer tecla para prosseguir...");
    Console.ReadKey();
}

void ExcluirAtracao()
{
    Console.WriteLine("");

    Console.Write("Digite o id da atração: ");
    int id = int.Parse(Console.ReadLine() ?? "0");

    conexao.Open();

    SqlCommand comando = new();
    comando.Connection = conexao;
    comando.CommandText = "DELETE FROM ATRACOES WHERE ID = @ID";
    comando.Parameters.AddWithValue("@ID", id);
    comando.ExecuteNonQuery();

    conexao.Close();

    Console.WriteLine("");
    Console.WriteLine("Atração excluída com sucesso!");
    Console.WriteLine("Pressione qualquer tecla para prosseguir...");
    Console.ReadKey();
}