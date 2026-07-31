using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestesLib.Excecoes
{
    public class MomentosIncoerentesException : Exception
    {
        public MomentosIncoerentesException(string message) : base(message)
        {
        }
    }
}