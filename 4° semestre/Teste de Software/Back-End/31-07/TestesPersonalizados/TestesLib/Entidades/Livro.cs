using System.Reflection.Metadata;

namespace TestesLib;

public class Livro
{
    public String Titulo { get; set; }
    public String Autor { get; set; }
    public int AnoPublicacao { get; set; }
    public int IdadeMinima { get; set; }

    public Livro(string titulo, string autor, int anoPublicacao, int idadeMinima)
    {
        Titulo = titulo;
        Autor = autor;
        AnoPublicacao = anoPublicacao;
        IdadeMinima = idadeMinima;
    }
}
