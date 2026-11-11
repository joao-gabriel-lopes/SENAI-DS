using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using BarbeariaRazor.Models;

namespace BarbeariaRazor.Pages.ClientePages;

public class IndexModel : PageModel
{
    private readonly BarbeariaRazorContext _context;

    public IndexModel(BarbeariaRazorContext context)
    {
        _context = context;
    }

    public IList<Cliente> Cliente { get; set; } = default!;

    public async Task OnGetAsync()
    {
        Cliente = await _context.Cliente.ToListAsync();
    }
}
