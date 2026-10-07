using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiBanco;
using Microsoft.AspNetCore.Identity;
using ApiBanco.Contracts;

[Route("api/[controller]")]
[ApiController]
public class UsuarioController : ControllerBase
{
    private readonly ApiBancoContext _context;
    private readonly IPasswordHasher<Usuario> _passwordhasher;
    public UsuarioController(ApiBancoContext context, IPasswordHasher<Usuario> passwordhasher)
    {
        _context = context;
        _passwordhasher = passwordhasher;
    }

    // GET: api/Usuario
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuario()
    {
        return await _context.Usuario.ToListAsync();
    }

    // GET: api/Usuario/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Usuario>> GetUsuario(System.Guid id)
    {
        var usuario = await _context.Usuario.FindAsync(id);

        if (usuario == null)
        {
            return NotFound();
        }

        return usuario;
    }

    // PUT: api/Usuario/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPatch("{id}")]
    public async Task<IActionResult> PatchUsuario(Guid id, PatchUsuario request)
    {
        var usuario = await _context.Usuario.FindAsync(id);

        if (usuario == null)
        {
            return NotFound();
        }

        if (request.Nome != null)
        {
            usuario.Nome = request.Nome;
        }

        if (request.Cpf != null)
        {
            usuario.Cpf = request.Cpf;
        }

        if (request.Rg != null)
        {
            usuario.Rg = request.Rg;
        }

        if (request.Senha != null)
        {
            usuario.Senha = _passwordhasher.HashPassword(usuario, request.Senha);
        }

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!UsuarioExists(id))
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

    // POST: api/Usuario
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Usuario>> PostUsuario(Usuario usuario)
    {
        usuario.Senha = _passwordhasher.HashPassword(usuario, usuario.Senha);

        _context.Usuario.Add(usuario);

        await _context.SaveChangesAsync();

        return CreatedAtAction("GetUsuario", new { id = usuario.Id }, usuario);
    }

    // POST: api/Usuario
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost("verificar")]
    public async Task<ActionResult<Usuario>> VerificarUsuario(PostVerificarUsuario request)
    {
        var usuario = await _context.Usuario.FirstOrDefaultAsync(u => u.Nome == request.Nome);

        if (usuario == null)
        {
            return NotFound();
        }

        var resultado = _passwordhasher.VerifyHashedPassword(usuario, usuario.Senha, request.Senha);

        if (resultado == PasswordVerificationResult.Failed)
        {
            return BadRequest("A senha inserida está incorreta");
        }

        return Ok("Login realizado com sucesso");
    }

    // DELETE: api/Usuario/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUsuario(System.Guid? id)
    {
        var usuario = await _context.Usuario.FindAsync(id);
        if (usuario == null)
        {
            return NotFound();
        }

        _context.Usuario.Remove(usuario);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool UsuarioExists(System.Guid? id)
    {
        return _context.Usuario.Any(e => e.Id == id);
    }
}
