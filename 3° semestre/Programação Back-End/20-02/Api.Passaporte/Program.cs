using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle;
using Api.Passaporte.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ApiPassaporteContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ApiPassaporteContext") ?? throw new InvalidOperationException("Connection string 'ApiPassaporteContext' not found.")));

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
}

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
