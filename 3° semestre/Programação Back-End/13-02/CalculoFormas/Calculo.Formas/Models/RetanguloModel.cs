using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Calculo.Formas.Models
{
    public class RetanguloModel : FormaModel
    {

        public decimal Largura { get; set; }
        public decimal Altura { get; set; }
        public override string Tipo => "Retângulo";

        public RetanguloModel(decimal largura, decimal altura)
        {
            Largura = largura;
            Altura = altura;
            Area = CalculoArea();
            Perimetro = CalculoPerimetro();
        }

        public override decimal CalculoArea()
        {
            return Largura * Altura;
        }

        public override decimal CalculoPerimetro()
        {
            return 2 * (Altura + Largura);
        }
    }
}