using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ProdutoDomain
{
    public class Produto
    {
        [Key] public Guid Id { get; set; }
        public Boolean Habilitado { get; set; } = true;
        public Guid CategoriaProdutoId { get; set; }
        public CategoriaProduto? CategoriaProduto { get; set; }
        public Guid UnidadeMedidaId { get; set; }
        public UnidadeMedida? UnidadeMedida { get; set; }
        [StringLength(100)] public String Nome { get; set; }
        public String? NomeArquivoFoto { get; set; }
        public String? Descricao { get; set; }
        [Column(TypeName = "decimal(18,2)")] public Decimal QuantidadeAtual { get; set; } = 0m;

        public Produto(bool habilitado, Guid categoriaProdutoId, Guid unidadeMedidaId, string nome, string nomeArquivoFoto, string descricao, decimal quantidadeAtual)
        {
            Habilitado = habilitado;
            CategoriaProdutoId = categoriaProdutoId;
            UnidadeMedidaId = unidadeMedidaId;
            Nome = nome;
            NomeArquivoFoto = nomeArquivoFoto;
            Descricao = descricao;
            QuantidadeAtual = quantidadeAtual >= 0 ? quantidadeAtual : throw new ArgumentException("A quantidade em estoque não pode ser menor que zero");
        }
    }
}
