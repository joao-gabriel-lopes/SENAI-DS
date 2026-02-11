using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Geometria.Retangulo
{
    public class RetanguloModel
    {
        public decimal Comprimento { get; }
        public decimal Largura { get; }
        public decimal Area { get; }
        public decimal Perimetro{ get; }

        public RetanguloModel(decimal comprimento, decimal largura)
        {
            Comprimento = comprimento;
            Largura = largura;
            Area = Largura * Comprimento;
            Perimetro = (Comprimento * 2) + (Largura * 2);
        }
    }
}