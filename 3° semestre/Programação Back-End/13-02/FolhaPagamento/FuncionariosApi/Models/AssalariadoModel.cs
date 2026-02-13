using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FuncionariosApi.Models
{
    public class AssalariadoModel : FuncionarioModel
    {
        public decimal Salario { get; set; }
        public decimal Desconto { get; set; }
        public override string Tipo => "Assalariado";

        public AssalariadoModel(string nome, string urlFoto, decimal salario, decimal desconto) : base(nome, urlFoto)
        {
            Salario = salario;
            Desconto = desconto;
            Pagamento = CalcularPagamento();
        }

        public override decimal CalcularPagamento()
        {
            return Salario - (Desconto * Salario / 100);
        }
    }
}