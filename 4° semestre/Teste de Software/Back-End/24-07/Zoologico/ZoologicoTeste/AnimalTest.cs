using ZoologicoDomain;

namespace ZoologicoTeste;

[TestClass]
public sealed class AnimalTest
{
    [TestMethod]
    public void VerificarNomeNulo()
    {
        Action instanciar = () => new Animal(
            null!,
            "Catus",
            "Felis",
            "F",
            10,
            new DateOnly(2025, 10, 5)
        );

        Assert.Throws<ArgumentNullException>(instanciar);
    }

    [TestMethod]
    public void VerificarNomeVazio()
    {
        Action instanciar = () => new Animal(
            "",
            "Catus",
            "Felis",
            "F",
            10,
            new DateOnly(2025, 10, 5)
        );

        Assert.Throws<ArgumentNullException>(instanciar);
    }

    [TestMethod]
    public void VerificarEspecieNula()
    {
        Action instanciar = () => new Animal(
            "Gato",
            null!,
            "Felis",
            "F",
            10,
            new DateOnly(2025, 10, 5)
        );

        Assert.Throws<ArgumentNullException>(instanciar);
    }

    [TestMethod]
    public void VerificarEspecieVazia()
    {
        Action instanciar = () => new Animal(
            "Gato",
            "",
            "Felis",
            "F",
            10,
            new DateOnly(2025, 10, 5)
        );

        Assert.Throws<ArgumentNullException>(instanciar);
    }

    [TestMethod]
    public void VerificarGeneroNulo()
    {
        Action instanciar = () => new Animal(
            "Gato",
            "Catus",
            null!,
            "F",
            10,
            new DateOnly(2025, 10, 5)
        );

        Assert.Throws<ArgumentNullException>(instanciar);
    }

    [TestMethod]
    public void VerificarGeneroVazio()
    {
        Action instanciar = () => new Animal(
            "Gato",
            "Catus",
            "",
            "F",
            10,
            new DateOnly(2025, 10, 5)
        );

        Assert.Throws<ArgumentNullException>(instanciar);
    }

    [TestMethod]
    public void VerificarSexoErrado()
    {
        Action instanciar = () => new Animal(
            "Gato",
            "Catus",
            "Felis",
            "hj",
            10,
            new DateOnly(2025, 10, 5)
        );

        Assert.Throws<ArgumentException>(instanciar);
    }

    [TestMethod]
    public void VerificarIdadeNegativa()
    {
        Action instanciar = () => new Animal(
            "Gato",
            "Catus",
            "Felis",
            "F",
            -5,
            new DateOnly(2025, 10, 5)
        );

        Assert.Throws<ArgumentException>(instanciar);
    }

    [TestMethod]
    public void VerificarDataMaiorQueHoje()
    {
        Action instanciar = () => new Animal(
            "Gato",
            "Catus",
            "Felis",
            "F",
            10,
            new DateOnly(2028, 10, 5)
        );

        Assert.Throws<ArgumentException>(instanciar);
    }
}
