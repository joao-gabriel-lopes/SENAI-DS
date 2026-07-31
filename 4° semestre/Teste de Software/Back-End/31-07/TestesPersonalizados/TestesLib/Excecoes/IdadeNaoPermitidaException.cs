using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestesLib.Excecoes
{
    public class IdadeNaoPermitidaException : Exception
    {
        public IdadeNaoPermitidaException(string message) : base(message)
        {
        }
    }
}