using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestesLib.Excecoes;

namespace TestesLib.Entidades
{
    public class Locacao
    {
        public Livro Livro { get; set; }
        public Cliente Cliente { get; set; }
        public DateTime MomentoRetirada { get; set; }
        public DateTime MomentoDevolucao { get; set; }

        public Locacao(Livro livro, Cliente cliente, DateTime momentoRetirada, DateTime momentoDevolucao)
        {
            if (cliente.Idade < livro.IdadeMinima)
            {
                throw new IdadeNaoPermitidaException("A idade do cliente não corresponde à idade mínima do livro escolhido");
            }

            if(momentoDevolucao < momentoRetirada)
            {
                throw new MomentosIncoerentesException("O momento da devolução não pode ser antes do momento de retirada");
            }

            if (cliente.TemPendencias)
            {
                throw new ClienteComPendenciasException("O cliente não deve possui pendências");
            }

            Livro = livro;
            Cliente = cliente;
            MomentoRetirada = momentoRetirada;
            MomentoDevolucao = momentoDevolucao;
        }
    }
}