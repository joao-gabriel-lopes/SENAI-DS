using TestesLib;
using TestesLib.Entidades;
using TestesLib.Excecoes;

namespace Testes;

[TestClass]
public sealed class LocacaoTest
{
    [TestMethod]
    public void IdadeMinimaPermitida()
    {
        Action instanciar = () => new Locacao
        (
            new Livro(
                "Memórias Póstumas de Brás Cubas",
                "Machado de Assis",
                1881,
                16
            ),
            new Cliente(
                "Pedro",
                15,
                false
            ),
            new DateTime(2026, 5, 10),
            new DateTime(2026, 5, 15)
        );

        Assert.Throws<IdadeNaoPermitidaException>(instanciar);
    }

    [TestMethod]
    public void DataDevolucaoMenor()
    {
        Action instanciar = () => new Locacao
        (
            new Livro(
                "Memórias Póstumas de Brás Cubas",
                "Machado de Assis",
                1881,
                16
            ),
            new Cliente(
                "Pedro",
                18,
                false
            ),
            new DateTime(2026, 5, 10),
            new DateTime(2026, 5, 5)
        );

        Assert.Throws<MomentosIncoerentesException>(instanciar);
    }

    [TestMethod]
    public void ClienteComPendencias()
    {
        Action instanciar = () => new Locacao
        (
            new Livro(
                "Memórias Póstumas de Brás Cubas",
                "Machado de Assis",
                1881,
                16
            ),
            new Cliente(
                "Pedro",
                18,
                true
            ),
            new DateTime(2026, 5, 10),
            new DateTime(2026, 5, 15)
        );

        Assert.Throws<ClienteComPendenciasException>(instanciar);
    }
}
