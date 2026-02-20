using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Api.Passaporte.Migrations
{
    /// <inheritdoc />
    public partial class Inicial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Passaportes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Nome = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Sobrenome = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Numero = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
                    Cpf = table.Column<string>(type: "nvarchar(11)", maxLength: 11, nullable: false),
                    Tipo = table.Column<string>(type: "nvarchar(2)", maxLength: 2, nullable: true),
                    UrlFoto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PaisEmissor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Nacionalidade = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Naturalidade = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DataNascimento = table.Column<DateOnly>(type: "date", nullable: true),
                    Sexo = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    NomePai = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    NomeMae = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DataExpedimento = table.Column<DateOnly>(type: "date", nullable: true),
                    DataVencimento = table.Column<DateOnly>(type: "date", nullable: true),
                    Autoridade = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Passaportes", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Passaportes");
        }
    }
}
