using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AlunoDomain;
using ApiAluno.Data;
using Azure.Core;
using ApiAluno.contracts;

namespace ApiAluno.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlunoController : ControllerBase
    {
        private readonly ApiAlunoContext _context;

        public AlunoController(ApiAlunoContext context)
        {
            _context = context;
        }

        // GET: api/Aluno
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Aluno>>> GetAluno()
        {
            return await _context.Aluno.ToListAsync();
        }

        [HttpGet("filtrados")]
        public async Task<ActionResult<IEnumerable<Aluno>>> GetAlunosFiltrados([FromQuery] IGetProdutoPesquisaRequest request)
        {
            var alunos = _context.Aluno.AsQueryable();

            if (!string.IsNullOrEmpty(request.Nome))
            {
                alunos = alunos.Where(p => p.Nome.Contains(request.Nome));
            }

            if (!string.IsNullOrEmpty(request.Sexo))
            {
                alunos = alunos.Where(p => p.Sexo.Contains(request.Sexo));
            }

            return await alunos.ToListAsync();
        }

        // GET: api/Aluno/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Aluno>> GetAluno(Guid id)
        {
            var aluno = await _context.Aluno.FindAsync(id);

            if (aluno == null)
            {
                return NotFound();
            }

            return aluno;
        }

        // PUT: api/Aluno/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAluno(Guid id, Aluno aluno)
        {
            if (id != aluno.Id)
            {
                return BadRequest();
            }

            _context.Entry(aluno).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AlunoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Aluno
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Aluno>> PostAluno(Aluno aluno)
        {
            _context.Aluno.Add(aluno);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAluno", new { id = aluno.Id }, aluno);
        }

        // DELETE: api/Aluno/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAluno(Guid id)
        {
            var aluno = await _context.Aluno.FindAsync(id);
            if (aluno == null)
            {
                return NotFound();
            }

            _context.Aluno.Remove(aluno);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AlunoExists(Guid id)
        {
            return _context.Aluno.Any(e => e.Id == id);
        }
    }
}
