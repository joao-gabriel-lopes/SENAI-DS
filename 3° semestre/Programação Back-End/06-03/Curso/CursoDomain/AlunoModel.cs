using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CursoDomain
{
    public class AlunoModel
    {
        public String NomeAluno { get; set; }
        public int Idade { get; set; }
        private List<NotaModel> _notas { get; set; } = [];
        public IReadOnlyList<NotaModel> Notas => _notas;

        public AlunoModel(String nomeAluno, int idade)
        {
            NomeAluno = nomeAluno;
            Idade = idade;
        }

        public void CriarNota(String nomeAtividade, int valorNota)
        {
            if (valorNota < 0)
            {
                throw new ArgumentException("A nota não deve ser menor que zero");
            }
            else if (valorNota > 100)
            {
                throw new ArgumentException("A nota não deve ser maior que cem");
            }

            _notas.Add(new NotaModel(nomeAtividade, valorNota));
            
            Console.WriteLine($"{nomeAtividade} cadastrada com a nota {valorNota}");
        }
    }
}