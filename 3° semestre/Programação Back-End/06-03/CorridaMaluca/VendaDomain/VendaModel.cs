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

    public void GerarIngresso(String descricao, decimal valor)
    {
        if(valor < 0)
        {
            throw new ArgumentException("O valor não pode ser menor que zero");
        }

        IngressoVendidoModel ingresso = new IngressoVendidoModel(descricao, valor);
        _ingressos.Add(ingresso);

        Console.WriteLine($"{NomeCliente} comprou o {ingresso.Descricao} por R${ingresso.Valor}");
    }
}
