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
        public String Entrada_Saida { get; set; }
        public List<OperacaoEstoqueDetalhe> Detalhes { get; set; }

        public OperacaoEstoque(DateTime hora, string motivo, string entrada_Saida, List<OperacaoEstoqueDetalhe> detalhes)
        {
            Hora = hora;
            Motivo = motivo;
            Entrada_Saida = entrada_Saida;
            Detalhes = detalhes;
        }

        public OperacaoEstoqueDetalhe CriarDetalhe(Produto produto, decimal quantidade)
        {
            if (produto.Habilitado)
            {
                if (Entrada_Saida == "Entrada")
                {
                    OperacaoEstoqueDetalhe operacaoEstoqueDetalhe = new OperacaoEstoqueDetalhe(produto, quantidade);
                    return operacaoEstoqueDetalhe;

                }
                else if (Entrada_Saida == "Saida")
                {
                    if (quantidade <= produto.QuantidadeAtual)
                    {
                        OperacaoEstoqueDetalhe operacaoEstoqueDetalhe = new OperacaoEstoqueDetalhe(produto, quantidade);
                        return operacaoEstoqueDetalhe;
                    } 
                    else
                    {
                        throw new ArgumentException("Ao final da operação a quantidade do produto não pode ser menor que zero");
                    }
                } 
                else
                {
                    throw new ArgumentException("O campo entrada_saida deve possuir como valor 'Entrada' ou 'Saida'");
                }
            }
            else
            {
                throw new ArgumentException("O produto deve estar habilitado");
            }
        }
    }
}
