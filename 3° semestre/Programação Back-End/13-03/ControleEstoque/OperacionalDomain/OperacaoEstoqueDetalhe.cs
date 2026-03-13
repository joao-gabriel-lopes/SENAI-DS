
using ProdutoDomain;
using System.ComponentModel.DataAnnotations;

namespace OperacionalDomain;

public class OperacaoEstoqueDetalhe
{
    [Key] public Guid Id { get; set; }
    public Produto Produto { get; set; }
    public Decimal Quantidade { get; set; }
    internal OperacaoEstoqueDetalhe(Produto produto, decimal quantidade)
    {
        Produto = produto;
        Quantidade = quantidade;
    }

}
