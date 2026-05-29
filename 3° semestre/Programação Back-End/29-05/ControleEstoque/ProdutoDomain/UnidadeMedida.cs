using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ProdutoDomain
{
    public class UnidadeMedida
    {
        [Key] public Guid Id { get; set; }        
        [StringLength(5)] public required String Sigla { get; set; }
        public String? Descricao { get; set; }
        public Boolean Fracionavel { get; set; } = false;

        public UnidadeMedida(string sigla, string descricao, bool fracionavel)
        {
            Sigla = sigla;
            Descricao = descricao;
            Fracionavel = fracionavel;
        }
    }
}
