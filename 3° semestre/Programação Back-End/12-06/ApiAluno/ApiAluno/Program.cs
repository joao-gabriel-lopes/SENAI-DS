using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ApiAluno.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ApiAlunoContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ApiAlunoContext") ?? throw new InvalidOperationException("Connection string 'ApiAlunoContext' not found.")));

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

app.Run();
