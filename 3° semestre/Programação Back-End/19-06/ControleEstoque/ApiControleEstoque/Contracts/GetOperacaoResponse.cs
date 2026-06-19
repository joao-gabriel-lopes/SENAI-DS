using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OperacionalDomain;
using ProdutoDomain;

namespace ApiControleEstoque.Contracts;

public record GetOperacaoResponse
{
    public Guid Id { get; set; }
    public DateTime Hora { get; set; }
    public required String EntradaSaida { get; set; }
    public required String Motivo { get; set; }
    public List<GetOperacaoDetalheResponse> Detalhes { get; set; } = [];
}

public record GetOperacaoDetalheResponse
{
    public Guid Id { get; set; }
    public Decimal Quantidade { get; set; }
    public String? ProdutoNome { get; set; }
    public String? UnidadeMedidaSigla { get; set; }
}