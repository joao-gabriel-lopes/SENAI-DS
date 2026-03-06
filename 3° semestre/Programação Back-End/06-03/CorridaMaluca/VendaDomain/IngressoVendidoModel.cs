using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VendaDomain;

public class IngressoVendidoModel
{
    public String Descricao { get; set; }
    public decimal Valor { get; set; }

    internal IngressoVendidoModel(String descricao, decimal valor)
    {
        Descricao = descricao;
        Valor = valor;
    }
}
