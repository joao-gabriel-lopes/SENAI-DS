using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAluno.contracts
{
    public record IGetProdutoPesquisaRequest
    {
        public String? Nome { get; set; }
        public String? Sexo { get; set; }

    }
}