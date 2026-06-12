using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AlunoDomain;

namespace ApiAluno.Data
{
    public class ApiAlunoContext : DbContext
    {
        public ApiAlunoContext (DbContextOptions<ApiAlunoContext> options)
            : base(options)
        {
        }

        public DbSet<AlunoDomain.Aluno> Aluno { get; set; } = default!;
    }
}
