using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Threading.Tasks;

namespace FuncionariosApi.Models
{
    public class ComissionadoModel : FuncionarioModel
    {
        public decimal PercetualComissao { get; set; }
        public decimal TotalVendas { get; set; }
        public override string Tipo => "Comissionado";

        public ComissionadoModel(string nome, string urlFoto, decimal percentualComissao, decimal totalVendas) : base(nome, urlFoto)
        {
            PercetualComissao = percentualComissao;
            TotalVendas = totalVendas;
            Pagamento = CalcularPagamento();
        }

        public override decimal CalcularPagamento()
        {
            return TotalVendas * PercetualComissao / 100;
        }
    }
}