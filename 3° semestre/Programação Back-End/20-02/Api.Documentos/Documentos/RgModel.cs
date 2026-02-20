using System.ComponentModel.DataAnnotations;

namespace Api.Documentos.Documentos
{
    public class RgModel
    {
        [Key]
        public Guid Id { get; set; }

        [StringLength(9)]
        public required String Numero { get; set; }

        [StringLength(100)]
        public required String Nome { get; set; }

        public required String UrlFoto { get; set; }

        [StringLength(100)]
        public String? NomePai { get; set; }

        [StringLength(100)]
        public String? NomeMae { get; set; }

        public DateOnly? DataNascimento { get; set; }

        [StringLength(10)]
        public required String OrgaoExpedidor { get; set; }

        [StringLength(3)]
        public String? FatorRh { get; set; }

        public String? Naturalidade { get; set; }

        public String? Observacao { get; set; }
    }
}
