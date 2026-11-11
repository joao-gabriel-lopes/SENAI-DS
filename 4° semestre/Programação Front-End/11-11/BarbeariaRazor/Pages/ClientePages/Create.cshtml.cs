using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using BarbeariaRazor.Models;

namespace BarbeariaRazor.Pages.ClientePages;

public class CreateModel : PageModel
{
    private readonly BarbeariaRazorContext _context;

    public CreateModel(BarbeariaRazorContext context)
    {
        _context = context;
    }

    public IActionResult OnGet()
    {
        return Page();
    }

    [BindProperty]
    public Cliente Cliente { get; set; } = default!;

    // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD.
    public async Task<IActionResult> OnPostAsync()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }

        _context.Cliente.Add(Cliente);
        await _context.SaveChangesAsync();

        return RedirectToPage("./Index");
    }
}
