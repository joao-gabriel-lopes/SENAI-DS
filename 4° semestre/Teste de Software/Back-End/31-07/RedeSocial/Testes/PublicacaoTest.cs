using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Biblioteca;
using Biblioteca.Entidades;
using Biblioteca.Excecoes;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Testes
{
    [TestClass]
    public class PublicacaoTest
    {
        [TestMethod]
        public void PublicacaoComExcessoDeCaracteres()
        {
            Action instanciar = () => new Publicacao(
                new Usuario(
                    "Guilherme",
                    "teste@gmail.com",
                    "12345",
                    18
                ),
                20,
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            );

            Assert.Throws<LimiteDeCaracteresExcedidoException>(instanciar);
        }
    }
}