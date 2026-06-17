using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiControleEstoque.Data;
using OperacionalDomain;

namespace ApiControleEstoque.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    internal class OperacaoEstoqueDetalheController : ControllerBase
    {
        private readonly ApiControleEstoqueContext _context;

        internal OperacaoEstoqueDetalheController(ApiControleEstoqueContext context)
        {
            _context = context;
        }

        // GET: api/OperacaoEstoqueDetalhe
        [HttpGet]
        internal async Task<ActionResult<IEnumerable<OperacaoEstoqueDetalhe>>> GetOperacaoEstoqueDetalhe()
        {
            return await _context.OperacaoEstoqueDetalhe.ToListAsync();
        }

        // GET: api/OperacaoEstoqueDetalhe/5
        [HttpGet("{id}")]
        internal async Task<ActionResult<OperacaoEstoqueDetalhe>> GetOperacaoEstoqueDetalhe(Guid id)
        {
            var operacaoEstoqueDetalhe = await _context.OperacaoEstoqueDetalhe.FindAsync(id);

            if (operacaoEstoqueDetalhe == null)
            {
                return NotFound();
            }

            return operacaoEstoqueDetalhe;
        }

        // PUT: api/OperacaoEstoqueDetalhe/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        internal async Task<IActionResult> PutOperacaoEstoqueDetalhe(Guid id, OperacaoEstoqueDetalhe operacaoEstoqueDetalhe)
        {
            if (id != operacaoEstoqueDetalhe.Id)
            {
                return BadRequest();
            }

            _context.Entry(operacaoEstoqueDetalhe).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OperacaoEstoqueDetalheExists(id))
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

        // POST: api/OperacaoEstoqueDetalhe
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        internal async Task<ActionResult<OperacaoEstoqueDetalhe>> PostOperacaoEstoqueDetalhe(OperacaoEstoqueDetalhe operacaoEstoqueDetalhe)
        {
            _context.OperacaoEstoqueDetalhe.Add(operacaoEstoqueDetalhe);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOperacaoEstoqueDetalhe", new { id = operacaoEstoqueDetalhe.Id }, operacaoEstoqueDetalhe);
        }

        // DELETE: api/OperacaoEstoqueDetalhe/5
        [HttpDelete("{id}")]
        internal async Task<IActionResult> DeleteOperacaoEstoqueDetalhe(Guid id)
        {
            var operacaoEstoqueDetalhe = await _context.OperacaoEstoqueDetalhe.FindAsync(id);
            if (operacaoEstoqueDetalhe == null)
            {
                return NotFound();
            }

            _context.OperacaoEstoqueDetalhe.Remove(operacaoEstoqueDetalhe);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OperacaoEstoqueDetalheExists(Guid id)
        {
            return _context.OperacaoEstoqueDetalhe.Any(e => e.Id == id);
        }
    }
}
