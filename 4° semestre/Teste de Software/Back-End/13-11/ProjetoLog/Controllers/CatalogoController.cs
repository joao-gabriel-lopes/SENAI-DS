using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol;
using ProjetoLog.Models;
using Serilog;

namespace ProjetoLog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatalogoController : ControllerBase
    {
        private readonly ProjetoLogContext _context;
        private readonly ILogger<CatalogoController> _logger;

        public CatalogoController(ProjetoLogContext context, ILogger<CatalogoController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/Catalogo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Catalogo>>> GetCatalogo()
        {
            _logger.LogInformation("Get");
            return await _context.Catalogo.ToListAsync();
        }

        // GET: api/Catalogo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Catalogo>> GetCatalogo(Guid id)
        {
            var catalogo = await _context.Catalogo.FindAsync(id);

            if (catalogo == null)
            {
                _logger.LogError("Erro get com id");
                return NotFound();
            }

            return catalogo;
        }

        // PUT: api/Catalogo/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCatalogo(Guid id, Catalogo catalogo)
        {
            if (id != catalogo.Id)
            {
                return BadRequest();
            }

            _context.Entry(catalogo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CatalogoExists(id))
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

        // POST: api/Catalogo
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Catalogo>> PostCatalogo(Catalogo catalogo)
        {
            _context.Catalogo.Add(catalogo);
            await _context.SaveChangesAsync();

            _logger.LogInformation(catalogo.ToJson());

            return CreatedAtAction("GetCatalogo", new { id = catalogo.Id }, catalogo);
        }

        // DELETE: api/Catalogo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCatalogo(Guid id)
        {
            var catalogo = await _context.Catalogo.FindAsync(id);
            if (catalogo == null)
            {
                return NotFound();
            }

            _context.Catalogo.Remove(catalogo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CatalogoExists(Guid id)
        {
            return _context.Catalogo.Any(e => e.Id == id);
        }
    }
}
