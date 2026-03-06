using PilotoDomain;

namespace EquipeDomain;

public class EquipeModel
{
    public String Nome { get; set; }
    private List<PilotoModel> _pilotos { get; set; } = [];
    public IReadOnlyList<PilotoModel> Pilotos => _pilotos;

    public EquipeModel(String nome)
    {
        Nome = nome;
    }

    public void AdicionarPiloto(PilotoModel piloto)
    {
        if (_pilotos.Count >= 2)
        {
            throw new ArgumentException("Limite de pilotos atingido!");
        }

        _pilotos.Add(piloto);
        Console.WriteLine($"{piloto.Nome} entrou na equipe {Nome}");
    }
}
