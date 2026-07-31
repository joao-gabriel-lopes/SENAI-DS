using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Biblioteca.Excecoes;

namespace Biblioteca.Entidades
{
    public class Publicacao
    {
        public Usuario Usuario { get; set; }
        public int Curtidas { get; set; }
        public List<Comentario>? Comentarios { get; set; }
        public String Conteudo {get; set;}

        public Publicacao(Usuario usuario, int curtidas, String conteudo)
        {
            if (conteudo.Length > 140)
            {
                throw new LimiteDeCaracteresExcedidoException("O conteúdo da publicação excede o limite de caracteres permitido em uma publicação");
            }

            Usuario = usuario;
            Curtidas = curtidas;
            Conteudo = conteudo;
        }
    }
}