using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Mentelisa.Models;

namespace Mentelisa.Pages.IndividuoPages;

public class IndexModel : PageModel
{
    private readonly MentelisaContext _context;

    public IndexModel(MentelisaContext context)
    {
        _context = context;
    }

    public IList<Individuo> Individuo { get; set; } = default!;

    public async Task OnGetAsync()
    {
        Individuo = await _context.Individuo.ToListAsync();
    }
}
