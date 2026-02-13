using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Calculo.Formas.Models
{
    public static class Dados
    {
        public static IList<FormaModel> GerarDados()
        {
            CirculoModel circulo1 = new CirculoModel(
                5
            );

            CirculoModel circulo2 = new CirculoModel(
                8
            );

            RetanguloModel retangulo1 = new RetanguloModel(
                10,
                15
            );

            RetanguloModel retangulo2 = new RetanguloModel(
                8,
                13
            );


            List<FormaModel> lista = new List<FormaModel>();

            lista.Add(circulo1);
            lista.Add(circulo2);
            lista.Add(retangulo1);
            lista.Add(retangulo2);

            return lista;
        }
    }
}