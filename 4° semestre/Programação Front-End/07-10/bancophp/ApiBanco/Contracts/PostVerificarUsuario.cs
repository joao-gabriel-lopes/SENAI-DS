using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiBanco.Contracts
{
    public record PostVerificarUsuario
    {
        public required string Nome { get; set; }
        public required string Senha { get; set; }
    }
}