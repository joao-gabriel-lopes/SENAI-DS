namespace VendaDomain;

public class VendaModel
{
    public String NomeCliente { get; set; }
    private List<IngressoVendidoModel> _ingressos { get; set; } = [];
    public IReadOnlyList<IngressoVendidoModel> Ingressos => _ingressos;

    public VendaModel(String nomeCliente)
    {
        NomeCliente = nomeCliente;
    }

    public IngressoVendidoModel GerarIngresso(String descricao, decimal valor)
    {
        return new IngressoVendidoModel(descricao, valor);
    }
}
