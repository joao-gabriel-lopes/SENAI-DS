using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Geometria.Trapezio
{
    public class TrapezioModel
    {
        public decimal BaseMaior { get; }
        public decimal BaseMenor { get; }
        public decimal Altura { get; }
        public decimal Area{ get; }

        public TrapezioModel(decimal baseMaior, decimal baseMenor, decimal altura)
        {
            BaseMaior = baseMaior;
            BaseMenor = baseMenor;
            Altura = altura;
            Area = (baseMaior + baseMenor) * Altura / 2;
        }
    }
}