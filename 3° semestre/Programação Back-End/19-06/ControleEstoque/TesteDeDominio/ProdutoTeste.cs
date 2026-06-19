using ProdutoDomain;

namespace TesteDeDominio;

[TestClass]
public sealed class ProdutoTeste
{
    [TestMethod]
    public void ImpedirQuantidadeMenorQueZero()
    {
        var produto = new Produto(
            true,
            Guid.NewGuid(),
            Guid.NewGuid(),
            "Alicate",
            "...",
            -5
        );
    }

    [TestMethod]
    public void PermitirQuantidadeIgualAZero()
    {
        var produto = new Produto(
            true,
            Guid.NewGuid(),
            Guid.NewGuid(),
            "Alicate",
            "...",
            0
        );
    }

    [TestMethod]
    public void PermitirQuantidadeMaiorQueZero()
    {
        var produto = new Produto(
            true,
            Guid.NewGuid(),
            Guid.NewGuid(),
            "Alicate",
            "...",
            4
        );
    }

    [TestMethod]
    public void ImpedirZeroCategorias()
    {
        var produto = new Produto(
            true,
            Guid.Empty,
            Guid.NewGuid(),
            "Alicate",
            "...",
            4
        );
    }

    [TestMethod]
    public void PermitirUmaCategoria()
    {
        var produto = new Produto(
            true,
            Guid.NewGuid(),
            Guid.NewGuid(),
            "Alicate",
            "...",
            4
        );
    }

    [TestMethod]
    public void ImpedirZeroUnidadesDeMedida()
    {
        var produto = new Produto(
            true,
            Guid.NewGuid(),
            Guid.Empty,
            "Alicate",
            "...",
            4
        );
    }

    [TestMethod]
    public void PermitirUmaUnidadeDeMedida()
    {
        var produto = new Produto(
            true,
            Guid.NewGuid(),
            Guid.NewGuid(),
            "Alicate",
            "...",
            4
        );
    }
}
