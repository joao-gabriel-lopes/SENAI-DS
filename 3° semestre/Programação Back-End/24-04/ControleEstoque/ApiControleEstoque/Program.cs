using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ApiControleEstoque.Data;
using ApiControleEstoque.Contracts;
using ProdutoDomain;
using Mapster;
using Microsoft.Extensions.FileProviders;

namespace ApiControleEstoque
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<ApiControleEstoqueContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("ApiControleEstoqueContext") ?? throw new InvalidOperationException("Connection string 'ApiControleEstoqueContext' not found.")));

            // Add services to the container.
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "FrontEnd",
        policy =>
            {
                policy
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            });
});

            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();

            TypeAdapterConfig<PatchProdutoRequest, Produto>.NewConfig().IgnoreNullValues(true);

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }

            app.UseSwagger();
            app.UseSwaggerUI();

            app.UseCors("FrontEnd");

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(
                Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "imagens")),
                RequestPath = "/imagens"
            });

            app.Run();
        }
    }
}
