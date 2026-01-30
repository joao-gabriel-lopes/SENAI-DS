using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace primeira_api.Models
{
    public class Multiplicacao
    {
        public int Numero1 { get; set; }
        public int Numero2 { get; set; }
        public int Resultado { get; }

        public Multiplicacao(int numero1, int numero2)
        {
            Numero1 = numero1;
            Numero2 = numero2;
            Resultado = Numero1 * Numero2;
        }

    }
}