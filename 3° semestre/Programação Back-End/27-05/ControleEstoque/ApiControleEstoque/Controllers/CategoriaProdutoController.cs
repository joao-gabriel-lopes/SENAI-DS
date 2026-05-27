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
    public class CategoriaProdutoController : ControllerBase
    {
        private readonly ApiControleEstoqueContext _context;

        public CategoriaProdutoController(ApiControleEstoqueContext context)
        {
            _context = context;
        }

        // GET: api/CategoriaProduto
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoriaProduto>>> GetCategoriaProduto()
        {
            return await _context.CategoriasProduto.ToListAsync();
        }

        // GET: api/CategoriaProduto/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CategoriaProduto>> GetCategoriaProduto(Guid id)
        {
            var categoriaProduto = await _context.CategoriasProduto.FindAsync(id);

            if (categoriaProduto == null)
            {
                return NotFound();
            }

            return categoriaProduto;
        }

        // PUT: api/CategoriaProduto/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategoriaProduto(Guid id, CategoriaProduto categoriaProduto)
        {
            if (id != categoriaProduto.Id)
            {
                return BadRequest();
            }

            _context.Entry(categoriaProduto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoriaProdutoExists(id))
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

        // POST: api/CategoriaProduto
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CategoriaProduto>> PostCategoriaProduto(CategoriaProduto categoriaProduto)
        {
            _context.CategoriasProduto.Add(categoriaProduto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCategoriaProduto", new { id = categoriaProduto.Id }, categoriaProduto);
        }

        // DELETE: api/CategoriaProduto/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategoriaProduto(Guid id)
        {
            var categoriaProduto = await _context.CategoriasProduto.FindAsync(id);
            if (categoriaProduto == null)
            {
                return NotFound();
            }

            _context.CategoriasProduto.Remove(categoriaProduto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoriaProdutoExists(Guid id)
        {
            return _context.CategoriasProduto.Any(e => e.Id == id);
        }
    }
}
