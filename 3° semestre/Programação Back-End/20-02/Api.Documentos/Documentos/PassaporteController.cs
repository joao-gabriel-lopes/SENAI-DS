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
    public class PassaporteController : ControllerBase
    {
        private readonly ApiDocumentosContext _context;

        public PassaporteController(ApiDocumentosContext context)
        {
            _context = context;
        }

        // GET: api/Passaporte
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PassaporteModel>>> GetPassaporteModel()
        {
            return await _context.Passaportes.ToListAsync();
        }

        // GET: api/Passaporte/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PassaporteModel>> GetPassaporteModel(Guid id)
        {
            var passaporteModel = await _context.Passaportes.FindAsync(id);

            if (passaporteModel == null)
            {
                return NotFound();
            }

            return passaporteModel;
        }

        // PUT: api/Passaporte/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPassaporteModel(Guid id, PassaporteModel passaporteModel)
        {
            if (id != passaporteModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(passaporteModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PassaporteModelExists(id))
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

        // POST: api/Passaporte
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PassaporteModel>> PostPassaporteModel(PassaporteModel passaporteModel)
        {
            _context.Passaportes.Add(passaporteModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPassaporteModel", new { id = passaporteModel.Id }, passaporteModel);
        }

        // DELETE: api/Passaporte/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePassaporteModel(Guid id)
        {
            var passaporteModel = await _context.Passaportes.FindAsync(id);
            if (passaporteModel == null)
            {
                return NotFound();
            }

            _context.Passaportes.Remove(passaporteModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PassaporteModelExists(Guid id)
        {
            return _context.Passaportes.Any(e => e.Id == id);
        }
    }
}
