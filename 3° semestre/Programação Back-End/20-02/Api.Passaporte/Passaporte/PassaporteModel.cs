using System.ComponentModel.DataAnnotations;

namespace Api.Passaporte.Passaporte
{
    public class PassaporteModel
    {
        [Key]
        public Guid Id { get; set; }

        [StringLength(100)]
        public required String Nome { get; set; }

        [StringLength(100)]
        public required String Sobrenome { get; set; }

        [StringLength(8)]
        public required String Numero { get; set; }

        [StringLength(11)]
        public required String Cpf { get; set; }

        [StringLength(2)]
        public String? Tipo { get; set; }
        public required String UrlFoto { get; set; }
        public required String PaisEmissor { get; set; }

        public String? Nacionalidade { get; set; }
        public String? Naturalidade { get; set; }
        public DateOnly? DataNascimento { get; set; }

        [StringLength(1)]
        public String? Sexo { get; set; }

        [StringLength(100)]
        public String? NomePai { get; set; }

        [StringLength(100)]
        public String? NomeMae { get; set; }
        public DateOnly? DataExpedimento { get; set; }
        public DateOnly? DataVencimento { get; set; }

        [StringLength(10)]
        public String? Autoridade { get; set; }
    }
}
