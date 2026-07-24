using System.Runtime.CompilerServices;
using Formula1Domain;

namespace Formula1Teste;

[TestClass]
public sealed class EquipeTest
{
    [TestMethod]
    public void VerificarNomeNulo()
    {
        Action instanciar = () => new Equipe(
            Guid.NewGuid(),
            null!,
            new DateOnly(2025, 5, 10),
            50
        );

        Assert.Throws<ArgumentNullException>(instanciar);
    }

    [TestMethod]
    public void VerificarNomeVazio()
    {
        Action instanciar = () => new Equipe(
            Guid.NewGuid(),
            "",
            new DateOnly(2025, 5, 10),
            50
        );

        Assert.Throws<ArgumentNullException>(instanciar);
    }

    [TestMethod]
    public void VerificarNomeUmCaractere()
    {
        Action instanciar = () => new Equipe(
            Guid.NewGuid(),
            "a",
            new DateOnly(2025, 5, 10),
            50
        );

        Assert.Throws<ArgumentException>(instanciar);
    }

    [TestMethod]
    public void VerificarNomeDoisCaracteres()
    {
        Action instanciar = () => new Equipe(
            Guid.NewGuid(),
            "ab",
            new DateOnly(2025, 5, 10),
            50
        );

        Assert.Throws<ArgumentException>(instanciar);
    }

    [TestMethod]
    public void VerificarNomeTresCaracteres()
    {
        Action instanciar = () => new Equipe(
            Guid.NewGuid(),
            "abc",
            new DateOnly(2025, 5, 10),
            50
        );

        instanciar();
    }

    [TestMethod]
    public void VerificarNomeLongo()
    {
        Action instanciar = () => new Equipe(
            Guid.NewGuid(),
            "Ferrari",
            new DateOnly(2025, 5, 10),
            50
        );

        instanciar();
    }

    [TestMethod]
    public void VerificarValorCaixaNegativo()
    {
        Action instanciar = () => new Equipe(
            Guid.NewGuid(),
            "Ferrari",
            new DateOnly(2025, 5, 10),
            -150
        );

        Assert.Throws<ArgumentException>(instanciar);
    }

    [TestMethod]
    public void VerificarValorCaixaZero()
    {
        Action instanciar = () => new Equipe(
            Guid.NewGuid(),
            "Ferrari",
            new DateOnly(2025, 5, 10),
            0
        );

        instanciar();
    }

    [TestMethod]
    public void VerificarValorCaixaPositivo()
    {
        Action instanciar = () => new Equipe(
            Guid.NewGuid(),
            "Ferrari",
            new DateOnly(2025, 5, 10),
            50
        );

        instanciar();
    }
}
