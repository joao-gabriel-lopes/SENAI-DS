using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiaMadeira;
using Microsoft.Data.SqlClient;

[Route("api/[controller]")]
[ApiController]
public class TipoMadeiraController : ControllerBase
{
    private readonly ApiaMadeiraContext _context;
    public TipoMadeiraController(ApiaMadeiraContext context)
    {
        _context = context;
    }

    // GET: api/TipoMadeira
    [HttpGet]
    public async Task<ActionResult<IEnumerable<TipoMadeira>>> GetTipoMadeira()
    {
        return await _context.TipoMadeira.ToListAsync();
    }

    // GET: api/TipoMadeira/5
    [HttpGet("{id}")]
    public async Task<ActionResult<TipoMadeira>> GetTipoMadeira(System.Guid id)
    {
        var tipomadeira = await _context.TipoMadeira.FindAsync(id);

        if (tipomadeira == null)
        {
            return NotFound();
        }

        return tipomadeira;
    }

    // PUT: api/TipoMadeira/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutTipoMadeira(System.Guid? id, TipoMadeira tipomadeira)
    {
        if (id != tipomadeira.Id)
        {
            return BadRequest();
        }

        _context.Entry(tipomadeira).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!TipoMadeiraExists(id))
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

    // POST: api/TipoMadeira
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<TipoMadeira>> PostTipoMadeira(TipoMadeira tipomadeira)
    {
        using SqlConnection conexao = new();
        conexao.ConnectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=MadeiraDB;Integrated Security=True;";

        conexao.Open();

        using SqlCommand comando = new();
        comando.Connection = conexao;
        comando.CommandText = "INSERT INTO TipoMadeira (Id, Nome, PrecoPorVolume, Descricao)" +
            "VALUES (@P1, @P2, @P3, @P4)";
        comando.Parameters.AddWithValue("@P1", tipomadeira.Id);
        comando.Parameters.AddWithValue("@P2", tipomadeira.Nome);
        comando.Parameters.AddWithValue("@P3", tipomadeira.PrecoPorVolume);
        comando.Parameters.AddWithValue("@P4", tipomadeira.Descricao);

        comando.ExecuteNonQuery();

        return StatusCode(201);

        //_context.TipoMadeira.Add(tipomadeira);
        //await _context.SaveChangesAsync();

        //return CreatedAtAction("GetTipoMadeira", new { id = tipomadeira.Id }, tipomadeira);
    }

    // DELETE: api/TipoMadeira/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTipoMadeira(System.Guid? id)
    {
        var tipomadeira = await _context.TipoMadeira.FindAsync(id);
        if (tipomadeira == null)
        {
            return NotFound();
        }

        _context.TipoMadeira.Remove(tipomadeira);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool TipoMadeiraExists(System.Guid? id)
    {
        return _context.TipoMadeira.Any(e => e.Id == id);
    }
}
