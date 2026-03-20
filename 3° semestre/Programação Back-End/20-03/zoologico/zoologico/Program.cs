using AnimalDomain;
using Mapster;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using zoologico.Data;
using zoologico.Dtos.Especie;

namespace zoologico
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<zoologicoContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("zoologicoContext") ?? throw new InvalidOperationException("Connection string 'zoologicoContext' not found.")));

            // Add services to the container.
            builder.Services.AddSwaggerGen();

            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();

            TypeAdapterConfig<PatchEspecieRequest, Especie>.NewConfig().IgnoreNullValues(true);

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }

            app.UseSwagger();
            app.UseSwaggerUI();

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
