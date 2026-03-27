using System.ComponentModel.DataAnnotations;

namespace ProdutoDomain
{
    public class CategoriaProduto
    {
        [Key] public Guid Id { get; set; }
        [StringLength(100)] public required String Nome { get; set; }
        public String? Descricao { get; set; }

        public CategoriaProduto(string nome, string descricao)
        {
            Nome = nome;
            Descricao = descricao;
        }
    }
}
