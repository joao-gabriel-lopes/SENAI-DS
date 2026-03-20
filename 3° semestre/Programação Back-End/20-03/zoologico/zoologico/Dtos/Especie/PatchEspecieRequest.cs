using AnimalDomain;
using System.ComponentModel.DataAnnotations;

namespace zoologico.Dtos.Especie;

public record PatchEspecieRequest
{
    public Guid? GeneroId { get; set; }
    public String? Nome { get; set; }
    public String? Descricao { get; set; }
    public int? Quantidade { get; set; }
}
