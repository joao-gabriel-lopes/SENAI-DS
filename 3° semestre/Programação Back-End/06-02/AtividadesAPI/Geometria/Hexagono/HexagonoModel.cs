using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AtividadesAPI.Geometria.Hexagono
{
    public class HexagonoModel
    {
        public double Comprimento { get; }
        public double Area { get; }
        public double Perimetro{ get; }

        public HexagonoModel(double comprimento)
        {
            Comprimento = comprimento;
            Area = Math.Round(6 * Math.Pow(Comprimento, 2) * Math.Sqrt(3) / 4, 2);
            Perimetro = Comprimento * 6;
        }
    }
}