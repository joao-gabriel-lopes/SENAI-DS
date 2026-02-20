using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Api.Docs.Migrations
{
    /// <inheritdoc />
    public partial class Inicial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Rgs",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Numero = table.Column<string>(type: "nvarchar(9)", maxLength: 9, nullable: false),
                    Nome = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    UrlFoto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NomePai = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    NomeMae = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    DataNascimento = table.Column<DateTime>(type: "datetime2", nullable: true),
                    OrgaoExpedidor = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    FatorRh = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: true),
                    Naturalidade = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Observacao = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rgs", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Rgs");
        }
    }
}
