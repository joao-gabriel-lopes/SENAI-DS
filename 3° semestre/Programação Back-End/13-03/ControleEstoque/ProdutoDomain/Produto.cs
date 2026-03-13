using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ProdutoDomain
{
    public class Produto
    {
        [Key] public Guid Id { get; set; }
        public Boolean Habilitado { get; set; }
        public required CategoriaProduto Categoria { get; set; }
        public required UnidadeMedida UnidadeMedida { get; set; }
        [StringLength(100)] public required String Nome { get; set; }
        public String NomeArquivoFoto { get; set; }
        public String Descricao { get; set; }
        public Decimal QuantidadeAtual { get; set; }

        public Produto(bool habilitado, CategoriaProduto categoria, UnidadeMedida unidadeMedida, string nome, string nomeArquivoFoto, string descricao, decimal quantidadeAtual)
        {
            Habilitado = habilitado;
            Categoria = categoria;
            UnidadeMedida = unidadeMedida;
            Nome = nome;
            NomeArquivoFoto = nomeArquivoFoto;
            Descricao = descricao;
            QuantidadeAtual = quantidadeAtual;
        }
    }
}
