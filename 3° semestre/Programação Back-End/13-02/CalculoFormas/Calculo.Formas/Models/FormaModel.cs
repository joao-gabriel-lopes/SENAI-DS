using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Calculo.Formas.Models
{
    public abstract class FormaModel
    {
        public abstract string Tipo { get;}
        public decimal Area { get; set; }
        public decimal Perimetro { get; set; }

        public abstract decimal CalculoArea();
        public abstract decimal CalculoPerimetro();
    }
}