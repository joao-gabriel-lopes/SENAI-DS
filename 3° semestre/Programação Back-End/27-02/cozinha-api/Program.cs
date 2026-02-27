using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle;
using Microsoft.EntityFrameworkCore;
using cozinha_api.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<cozinha_apiContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("cozinha_apiContext") ?? throw new InvalidOperationException("Connection string 'cozinha_apiContext' not found.")));

// Add services to the container.

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

app.UseRouting();

app.UseCors("FrontEnd");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
