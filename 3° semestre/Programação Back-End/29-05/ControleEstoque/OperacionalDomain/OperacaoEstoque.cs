using ProdutoDomain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.SymbolStore;
using System.Text;

namespace OperacionalDomain
{
    public class OperacaoEstoque
    {
        [Key] public Guid Id { get; set; }
        public DateTime Hora { get; set; }
        public String Motivo { get; set; }
        [StringLength(1)] public String EntradaSaida { get; set; }
        private List<OperacaoEstoqueDetalhe> _detalhes { get; set; } = [];
        public IReadOnlyList<OperacaoEstoqueDetalhe> Detalhes => _detalhes;

        public OperacaoEstoque(DateTime hora, string motivo, string entradaSaida)
        {
            if (entradaSaida.ToUpper() != "S" && entradaSaida.ToUpper() != "E")
            {
                throw new ArgumentException("Entrada ou Saída só pode ser 'E' ou 'S'");
            }

            Hora = hora;
            Motivo = motivo;
            EntradaSaida = entradaSaida;
        }

        public void CriarDetalhe(Produto produto, decimal quantidade)
        {
            if (EntradaSaida.ToUpper() == "S" && quantidade < produto.QuantidadeAtual)
            {
                throw new ArgumentException("Não é possível fazer uma saída com uma quantidade maior que a disponível no estoque");
            }

            if (!produto.Habilitado)
            {
                throw new ArgumentException("Não é possível fazer operações com um produto desabilitado");
            }
            
            OperacaoEstoqueDetalhe detalhe = new (produto.Id, quantidade);

            _detalhes.Add(detalhe);
        }
    }
}
