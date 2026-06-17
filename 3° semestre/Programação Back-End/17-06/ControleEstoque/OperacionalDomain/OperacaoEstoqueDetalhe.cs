using ProdutoDomain;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OperacionalDomain;

public class OperacaoEstoqueDetalhe
{
    [Key] public Guid Id { get; set; }
    public Guid ProdutoId { get; set; }
    public Produto? Produto { get; set; }
    [Column(TypeName = "decimal(18,2)")] public Decimal Quantidade { get; set; }
    internal OperacaoEstoqueDetalhe(Guid produtoId, decimal quantidade)
    {
        if (produtoId == Guid.Empty)
        {
            throw new ArgumentException("O produto deve ser obrigatoriamente informado");
        }

        if (quantidade <= 0)
        {
            throw new ArgumentException("A quantidade deve ser maior que zero");
        }

        ProdutoId = produtoId;
        Quantidade = quantidade;
    }

}
