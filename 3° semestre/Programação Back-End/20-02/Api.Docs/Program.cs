using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Api.Docs.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ApiDocsContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ApiDocsContext") ?? throw new InvalidOperationException("Connection string 'ApiDocsContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
