using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AtividadesAPI.Geometria.Circulo
{
    public class CirculoModel
    {
        public double Raio { get; }
        public double Area { get; }
        public double Perimetro{ get; }

        public CirculoModel(double raio)
        {
            Raio = raio;
            Area = raio * raio * 3.14;
            Perimetro = Math.Round(Raio * 2 * 3.14, 2);
        }
    }
}