using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FuncionariosApi.Models
{
    public class HoristaModel : FuncionarioModel
    {
        public decimal HorasTrabalhadas { get; set; }
        public decimal ValorPorHora { get; set; }
        public override string Tipo => "Horista";

        public HoristaModel(string nome, string urlFoto, decimal horasTrabalhadas, decimal valorPorHora) : base(nome, urlFoto)
        {
            HorasTrabalhadas = horasTrabalhadas;
            ValorPorHora = valorPorHora;
            Pagamento = CalcularPagamento();
        }

        public override decimal CalcularPagamento()
        {
            return HorasTrabalhadas * ValorPorHora;
        }
    }
}