using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Biblioteca.Excecoes
{
    public class LimiteDeCaracteresExcedidoException : Exception
    {
        public LimiteDeCaracteresExcedidoException(string message) : base(message)
        {
        }
    }
}