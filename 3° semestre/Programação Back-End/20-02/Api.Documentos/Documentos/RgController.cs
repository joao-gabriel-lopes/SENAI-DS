using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Api.Documentos.Data;

namespace Api.Documentos.Documentos
{
    [Route("api/[controller]")]
    [ApiController]
    public class RgController : ControllerBase
    {
        private readonly ApiDocumentosContext _context;

        public RgController(ApiDocumentosContext context)
        {
            _context = context;
        }

        // GET: api/Rg
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RgModel>>> GetRgModel()
        {
            return await _context.Rgs.ToListAsync();
        }

        // GET: api/Rg/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RgModel>> GetRgModel(Guid id)
        {
            var rgModel = await _context.Rgs.FindAsync(id);

            if (rgModel == null)
            {
                return NotFound();
            }

            return rgModel;
        }

        // PUT: api/Rg/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRgModel(Guid id, RgModel rgModel)
        {
            if (id != rgModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(rgModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RgModelExists(id))
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

        // POST: api/Rg
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RgModel>> PostRgModel(RgModel rgModel)
        {
            _context.Rgs.Add(rgModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRgModel", new { id = rgModel.Id }, rgModel);
        }

        // DELETE: api/Rg/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRgModel(Guid id)
        {
            var rgModel = await _context.Rgs.FindAsync(id);
            if (rgModel == null)
            {
                return NotFound();
            }

            _context.Rgs.Remove(rgModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RgModelExists(Guid id)
        {
            return _context.Rgs.Any(e => e.Id == id);
        }
    }
}
