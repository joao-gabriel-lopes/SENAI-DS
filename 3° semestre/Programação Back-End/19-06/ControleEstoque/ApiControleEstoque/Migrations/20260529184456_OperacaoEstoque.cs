using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApiControleEstoque.Migrations
{
    /// <inheritdoc />
    public partial class OperacaoEstoque : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OperacaoEstoque",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Hora = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Motivo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EntradaSaida = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OperacaoEstoque", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OperacaoEstoqueDetalhe",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProdutoId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Quantidade = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    OperacaoEstoqueId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OperacaoEstoqueDetalhe", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OperacaoEstoqueDetalhe_OperacaoEstoque_OperacaoEstoqueId",
                        column: x => x.OperacaoEstoqueId,
                        principalTable: "OperacaoEstoque",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_OperacaoEstoqueDetalhe_Produtos_ProdutoId",
                        column: x => x.ProdutoId,
                        principalTable: "Produtos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OperacaoEstoqueDetalhe_OperacaoEstoqueId",
                table: "OperacaoEstoqueDetalhe",
                column: "OperacaoEstoqueId");

            migrationBuilder.CreateIndex(
                name: "IX_OperacaoEstoqueDetalhe_ProdutoId",
                table: "OperacaoEstoqueDetalhe",
                column: "ProdutoId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OperacaoEstoqueDetalhe");

            migrationBuilder.DropTable(
                name: "OperacaoEstoque");
        }
    }
}
