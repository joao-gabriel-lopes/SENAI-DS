using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProdutoDomain;
using OperacionalDomain;

namespace ApiControleEstoque.Data
{
    public class ApiControleEstoqueContext : DbContext
    {
        public ApiControleEstoqueContext(DbContextOptions<ApiControleEstoqueContext> options)
            : base(options)
        {
        }

        public DbSet<UnidadeMedida> UnidadesMedida { get; set; } = default!;
        public DbSet<CategoriaProduto> CategoriasProduto { get; set; } = default!;
        public DbSet<Produto> Produtos { get; set; } = default!;
        public DbSet<OperacionalDomain.OperacaoEstoque> OperacaoEstoque { get; set; } = default!;
        public DbSet<OperacionalDomain.OperacaoEstoqueDetalhe> OperacaoEstoqueDetalhe { get; set; } = default!;
    }
}
