using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Calculo.Formas.Models
{
    public class CirculoModel : FormaModel
    {
        public decimal Raio { get; set; }
        public override string Tipo => "Círculo";

        public CirculoModel(decimal raio)
        {
            Raio = raio;
            Area = CalculoArea();
            Perimetro = CalculoPerimetro();
        }

        public override decimal CalculoArea()
        {
            return 3.14m * Raio * Raio;
        }

        public override decimal CalculoPerimetro()
        {
            return 3.14m * Raio * 2;
        }
        
    }
}