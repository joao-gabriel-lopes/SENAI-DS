using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiControleEstoque.Data;
using ProdutoDomain;
using ApiControleEstoque.Contracts;
using Mapster;

namespace ApiControleEstoque.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoController : ControllerBase
    {
        private readonly ApiControleEstoqueContext _context;

        public ProdutoController(ApiControleEstoqueContext context)
        {
            _context = context;
        }

        // GET: api/Produto
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Produto>>> GetProduto()
        {
            return await _context.Produtos.ToListAsync();
        }

        // GET: api/Produto/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Produto>> GetProduto(Guid id)
        {
            var produto = await _context.Produtos.FindAsync(id);

            if (produto == null)
            {
                return NotFound();
            }

            return produto;
        }

        [HttpPatch("/api/produto/imagem/{id}")]
        public async Task<IActionResult> PatchProdutoImagem(Guid id, IFormFile arquivo)
        {
            var produto = await _context.Produtos.FindAsync(id);

            if (produto == null)
            {
                return NotFound("Produto não encontrado");
            }

            var extensao = Path.GetExtension(arquivo.FileName).ToLower();

            var diretorioDestino = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "imagens");

            var caminhoArquivo = Path.Combine(diretorioDestino, $"{id}{extensao}");

            var stream = new FileStream(caminhoArquivo, FileMode.Create);

            await arquivo.CopyToAsync(stream);

            produto.NomeArquivoFoto = Path.Combine($"{id}{extensao}");

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProdutoExists(id))
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

        // PUT: api/Produto/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPatch("{id}")]
        public async Task<IActionResult> PatchProduto(Guid id, PatchProdutoRequest request)
        {
            var produto = await _context.Produtos.FindAsync(id);

            if (produto == null)
            {
                return NotFound("Produto não encontrado");
            }

            request.Adapt(produto);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProdutoExists(id))
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

        // POST: api/Produto
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Produto>> PostProduto(PostProdutoRequest request)
        {
            var categoriaProduto = await _context.CategoriasProduto.FindAsync(request.CategoriaProdutoId);

            if (categoriaProduto == null)
            {
                return NotFound("A categoria fornecida não existe");
            }

            var unidadeMedida = await _context.UnidadesMedida.FindAsync(request.UnidadeMedidaId);

            if(unidadeMedida == null)
            {
                return NotFound("A unidade de medida fornecida não existe");
            }

            Produto produto = new Produto(
                true,
                request.CategoriaProdutoId,
                request.UnidadeMedidaId,
                request.Nome,
                request.Descricao ?? "",
                request.QuantidadeAtual ?? 0m
             );
            
            produto.UnidadeMedida = await _context.UnidadesMedida.FindAsync(produto.UnidadeMedidaId);

            if(produto.UnidadeMedida == null)
            {
                return NotFound("Unidade de medida não encontrada");
            }

            if (!produto.UnidadeMedida.Fracionavel)
            {
                if(produto.QuantidadeAtual % Math.Floor(produto.QuantidadeAtual) != 0)
                {
                    return NotFound("Um produto não fracionável não pode receber valores fracionários");
                }
            }

            _context.Produtos.Add(produto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduto", new { id = produto.Id }, produto);
        }

        // DELETE: api/Produto/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduto(Guid id)
        {
            var produto = await _context.Produtos.FindAsync(id);

            if (produto == null)
            {
                return NotFound();
            }

            var diretorioDestino = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "imagens");

            var caminhoArquivo = Path.Combine(diretorioDestino, $"{produto.NomeArquivoFoto}");

            if (System.IO.File.Exists(caminhoArquivo))
            {
                System.IO.File.Delete(caminhoArquivo);
            }

            _context.Produtos.Remove(produto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProdutoExists(Guid id)
        {
            return _context.Produtos.Any(e => e.Id == id);
        }
    }
}
