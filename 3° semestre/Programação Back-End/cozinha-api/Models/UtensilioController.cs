using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using cozinha_api.Data;

namespace cozinha_api.Models
{
    [Route("[controller]")]
    [ApiController]
    public class UtensilioController : ControllerBase
    {
        private readonly cozinha_apiContext _context;

        public UtensilioController(cozinha_apiContext context)
        {
            _context = context;
        }

        // GET: api/Utensilio
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UtensilioModel>>> GetUtensilioModel()
        {
            return await _context.Utensilios.ToListAsync();
        }

        // GET: api/Utensilio/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UtensilioModel>> GetUtensilioModel(Guid id)
        {
            var utensilioModel = await _context.Utensilios.FindAsync(id);

            if (utensilioModel == null)
            {
                return NotFound();
            }

            return utensilioModel;
        }

        // PUT: api/Utensilio/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUtensilioModel(Guid id, UtensilioModel utensilioModel)
        {
            if (id != utensilioModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(utensilioModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UtensilioModelExists(id))
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

        // POST: api/Utensilio
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UtensilioModel>> PostUtensilioModel(UtensilioModel utensilioModel)
        {
            _context.Utensilios.Add(utensilioModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUtensilioModel", new { id = utensilioModel.Id }, utensilioModel);
        }

        // DELETE: api/Utensilio/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUtensilioModel(Guid id)
        {
            var utensilioModel = await _context.Utensilios.FindAsync(id);
            if (utensilioModel == null)
            {
                return NotFound();
            }

            _context.Utensilios.Remove(utensilioModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UtensilioModelExists(Guid id)
        {
            return _context.Utensilios.Any(e => e.Id == id);
            return _context.Utensilios.Any(e => e.Id == id);
        }
    }
}
