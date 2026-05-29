using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiControleEstoque.Data;
using ProdutoDomain;

namespace ApiControleEstoque.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UnidadeMedidaController : ControllerBase
    {
        private readonly ApiControleEstoqueContext _context;

        public UnidadeMedidaController(ApiControleEstoqueContext context)
        {
            _context = context;
        }

        // GET: api/UnidadeMedida
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UnidadeMedida>>> GetUnidadeMedida()
        {
            return await _context.UnidadesMedida.ToListAsync();
        }

        // GET: api/UnidadeMedida/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UnidadeMedida>> GetUnidadeMedida(Guid id)
        {
            var unidadeMedida = await _context.UnidadesMedida.FindAsync(id);

            if (unidadeMedida == null)
            {
                return NotFound();
            }

            return unidadeMedida;
        }

        // PUT: api/UnidadeMedida/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUnidadeMedida(Guid id, UnidadeMedida unidadeMedida)
        {
            if (id != unidadeMedida.Id)
            {
                return BadRequest();
            }

            _context.Entry(unidadeMedida).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UnidadeMedidaExists(id))
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

        // POST: api/UnidadeMedida
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UnidadeMedida>> PostUnidadeMedida(UnidadeMedida unidadeMedida)
        {
            _context.UnidadesMedida.Add(unidadeMedida);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUnidadeMedida", new { id = unidadeMedida.Id }, unidadeMedida);
        }

        // DELETE: api/UnidadeMedida/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUnidadeMedida(Guid id)
        {
            var unidadeMedida = await _context.UnidadesMedida.FindAsync(id);
            if (unidadeMedida == null)
            {
                return NotFound();
            }

            _context.UnidadesMedida.Remove(unidadeMedida);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UnidadeMedidaExists(Guid id)
        {
            return _context.UnidadesMedida.Any(e => e.Id == id);
        }
    }
}
