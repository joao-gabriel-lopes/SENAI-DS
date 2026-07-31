using Biblioteca;
using TestesLib.Excecoes;

namespace Testes;

[TestClass]
public sealed class UsuarioTest
{
    [TestMethod]
    public void ClienteNomeNulo()
    {
        Action instanciar = () => new Usuario(
            null!,
            "teste@gmail.com",
            "12345",
            18
        );

        Assert.Throws<ArgumentNullException>(instanciar);
    }

    [TestMethod]
    public void ClienteNomeVazio()
    {
        Action instanciar = () => new Usuario(
            "",
            "teste@gmail.com",
            "12345",
            18
        );

        Assert.Throws<ArgumentNullException>(instanciar);
    }

    [TestMethod]
    public void ClienteEmailNulo()
    {
        Action instanciar = () => new Usuario(
            "Guilherme",
            null!,
            "12345",
            18
        );

        Assert.Throws<ArgumentNullException>(instanciar);
    }

    [TestMethod]
    public void ClienteEmailVazio()
    {
        Action instanciar = () => new Usuario(
            "Guilherme",
            "",
            "12345",
            18
        );

        Assert.Throws<ArgumentNullException>(instanciar);
    }

    [TestMethod]
    public void ClienteSenhaNula()
    {
        Action instanciar = () => new Usuario(
            "Guilherme",
            "teste@gmail.com",
            null!,
            18
        );

        Assert.Throws<ArgumentNullException>(instanciar);
    }

    [TestMethod]
    public void ClienteSenhaVazia()
    {
        Action instanciar = () => new Usuario(
            "Guilherme",
            "teste@gmail.com",
            "",
            18
        );

        Assert.Throws<ArgumentNullException>(instanciar);
    }

    [TestMethod]
    public void ClienteIdadeInvalida()
    {
        Action instanciar = () => new Usuario(
            "Guilherme",
            "teste@gmail.com",
            "12345",
            15
        );

        Assert.Throws<IdadeNaoPermitidaException>(instanciar);
    }
}
