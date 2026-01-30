using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace primeira_api.Models
{
    public class Radiciacao
    {
        public int Numero1 { get; set; }
        public double Resultado { get; }

        public Radiciacao(int numero1)
        {
            Numero1 = numero1;
            Resultado = Math.Sqrt(numero1);
        }
    }
}