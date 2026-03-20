using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AnimalDomain;

public class Especie
{
    [Key] public Guid Id { get; set; }
    public Guid GeneroId { get; set; }
    public Genero? Genero { get; set; }
    [StringLength(50)] public String Nome { get; set; }
    public String? Descricao { get; set; }
    public int Quantidade { get; set; }
    public String? ArquivoImagem { get; set; }

    public Especie(Guid generoId, string nome, string? descricao, int quantidade, string? arquivoImagem)
    {
        GeneroId = generoId;
        Nome = nome;
        Descricao = descricao;
        Quantidade = quantidade;
        ArquivoImagem = arquivoImagem;
    }
}
