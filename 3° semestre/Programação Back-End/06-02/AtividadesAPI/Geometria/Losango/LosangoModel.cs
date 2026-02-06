using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AtividadesAPI.Geometria.Losango
{
    public class LosangoModel
    {
        public decimal DiagonalMaior { get; }
        public decimal DiagonalMenor { get; }
        public decimal Area{ get; }
        public decimal Perimetro{ get; }

        public LosangoModel(decimal diagonalMaior, decimal diagonalMenor)
        {
            DiagonalMaior = diagonalMaior;
            DiagonalMenor = diagonalMenor;
            Area = DiagonalMaior * DiagonalMenor / 2;
            Perimetro = 2 * (DiagonalMaior + DiagonalMenor);
        }
    }
}