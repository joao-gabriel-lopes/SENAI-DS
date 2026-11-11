using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using BarbeariaRazor.Models;

namespace BarbeariaRazor.Pages.ClientePages;

public class EditModel : PageModel
{
    private readonly BarbeariaRazorContext _context;

    public EditModel(BarbeariaRazorContext context)
    {
        _context = context;
    }

    [BindProperty]
    public Cliente Cliente { get; set; } = default!;

    public async Task<IActionResult> OnGetAsync(System.Guid? id)
    {
        if (id is null)
        {
            return NotFound();
        }

        var cliente = await _context.Cliente.FirstOrDefaultAsync(m => m.Id == id);
        if (cliente is null)
        {
            return NotFound();
        }
        Cliente = cliente;
        return Page();
    }

    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see https://aka.ms/RazorPagesCRUD.
    public async Task<IActionResult> OnPostAsync()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }

        _context.Attach(Cliente).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ClienteExists(Cliente.Id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return RedirectToPage("./Index");
    }

    private bool ClienteExists(System.Guid id)
    {
        return _context.Cliente.Any(e => e.Id == id);
    }
}
