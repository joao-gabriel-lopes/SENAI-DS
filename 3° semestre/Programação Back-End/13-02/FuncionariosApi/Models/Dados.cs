using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FuncionariosApi.Models
{
    public static class Dados
    {
        public static IList<FuncionarioModel> GerarDados()
        {
            ComissionadoModel comissionado = new ComissionadoModel(
                "Guilherme",
                "https://cdn-icons-png.flaticon.com/512/4792/4792929.png",
                5m,
                10000m
            );

            AssalariadoModel assalariado = new AssalariadoModel(
                "Pedro",
                "https://cdn-icons-png.flaticon.com/512/4792/4792929.png",
                2000m,
                5m
            );

            HoristaModel horista = new HoristaModel(
                "Rodrigo",
                "https://cdn-icons-png.flaticon.com/512/4792/4792929.png",
                160m,
                20m
            );

            List<FuncionarioModel> lista = new List<FuncionarioModel>();

            lista.Add(comissionado);
            lista.Add(assalariado);
            lista.Add(horista);

            return lista;
        }
    }
}