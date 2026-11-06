using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using ProjetoRazor.Models;

namespace ProjetoRazor.Pages.SuplementoPages;

public class IndexModel : PageModel
{
    private readonly ProjetoRazorContext _context;

    public IndexModel(ProjetoRazorContext context)
    {
        _context = context;
    }

    public IList<Suplemento> Suplemento { get; set; } = default!;

    public async Task OnGetAsync()
    {
        Suplemento = await _context.Suplemento.ToListAsync();
    }
}
