using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiBanco.Contracts
{
    public record PostVerificarUsuarioRequest
    {
        public required string Cpf { get; set; }
        public required string Senha { get; set; }
    }
}