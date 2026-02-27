using System.ComponentModel.DataAnnotations;

namespace cozinha_api.Models
{
    public class UtensilioModel
    {
        [Key]
        public Guid Id { get; set; }

        [StringLength(50)]
        public String Nome { get; set; }
    }
}
