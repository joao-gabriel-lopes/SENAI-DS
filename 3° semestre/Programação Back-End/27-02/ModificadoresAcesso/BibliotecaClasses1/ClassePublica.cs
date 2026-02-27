using Microsoft.VisualBasic;

namespace BibliotecaClasses1;

public class ClassePublica
{
    public string? Texto { get; set; } = "Essa é uma classe pública";
    internal string? Nome { get; set; }
    private DateOnly _dataNascimento { get; set; }
    protected int Idade { get; set; }

    public void setDataNascimento(DateOnly data)
    {
        DateOnly hoje = DateOnly.FromDateTime(DateTime.Now);

        if (data > hoje)
        {
            throw new ArgumentException("A data não pode ser maior que a data de hoje");
        }

        _dataNascimento = data;
    }
}
