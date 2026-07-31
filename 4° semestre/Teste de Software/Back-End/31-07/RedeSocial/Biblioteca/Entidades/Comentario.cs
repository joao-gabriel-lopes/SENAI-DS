using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Biblioteca.Excecoes;

namespace Biblioteca.Entidades
{
    public class Comentario
    {
        public Usuario Usuario { get; set; }
        public Publicacao Publicacao { get; set; }
        public String Conteudo { get; set; }

        public Comentario(Usuario usuario, Publicacao publicacao, String conteudo)
        {
            if (conteudo.Length > 50)
            {
                throw new LimiteDeCaracteresExcedidoException("O conteúdo da publicação excede o limite de caracteres permitido em um comentário");
            }

            Usuario = usuario;
            Publicacao = publicacao;
            Conteudo = conteudo;
        }
    }
}