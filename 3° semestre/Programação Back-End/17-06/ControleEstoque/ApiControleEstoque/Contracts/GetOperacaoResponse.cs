using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OperacionalDomain;
using ProdutoDomain;

namespace ApiControleEstoque.Contracts;

public record GetOperacaoResponse
{
    public required Guid Id { get; set; }
    public required DateTime Hora { get; set; }
    public required String Motivo { get; set; }
    public required List<GetOperacaoDetalheResponse> Detalhes { get; set; }

}

public record GetOperacaoDetalheResponse
{
    public required Guid Id { get; set; }
    public required Decimal Quantidade { get; set; }
    public required String ProdutoNome { get; set; }
    public required String UnidadeMedidaSigla { get; set; }
    
}