using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OperacionalDomain;

namespace ApiControleEstoque.Contracts;

public record PostOperacaoRequest
{
    public required String Motivo { get; set; }
    public required String EntradaSaida { get; set; }
    public required List<PostOperacaoEstoqueDetalheRequest> Detalhes { get; set; }
}

public record PostOperacaoEstoqueDetalheRequest
{
    public required Guid ProdutoId { get; set; }
    public required Decimal Quantidade { get; set; }
    
}