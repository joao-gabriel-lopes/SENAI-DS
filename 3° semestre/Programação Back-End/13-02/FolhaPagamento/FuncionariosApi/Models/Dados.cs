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
                "https://randomuser.me/api/portraits/men/1.jpg",
                5m,
                10000m
            );

            AssalariadoModel assalariado = new AssalariadoModel(
                "Pedro",
                "https://randomuser.me/api/portraits/men/56.jpg",
                2000m,
                5m
            );

            HoristaModel horista = new HoristaModel(
                "Rodrigo",
                "https://randomuser.me/api/portraits/men/63.jpg",
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