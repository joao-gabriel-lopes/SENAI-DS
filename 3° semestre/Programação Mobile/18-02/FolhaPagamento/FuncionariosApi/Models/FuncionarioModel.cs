using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FuncionariosApi.Models
{
    public abstract class FuncionarioModel
    {
        public string Nome { get; set; }
        public string UrlFoto { get; set; }
        public abstract string Tipo {get;}
        public decimal Pagamento { get; set; }

        public FuncionarioModel(string nome, string urlFoto)
        {
            Nome = nome;
            UrlFoto = urlFoto;
        }

        public abstract decimal CalcularPagamento();

    }
}