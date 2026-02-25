using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Api.Documentos.Migrations
{
    /// <inheritdoc />
    public partial class Ajuste : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_RgModel",
                table: "RgModel");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PassaporteModel",
                table: "PassaporteModel");

            migrationBuilder.RenameTable(
                name: "RgModel",
                newName: "Rgs");

            migrationBuilder.RenameTable(
                name: "PassaporteModel",
                newName: "Passaportes");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Rgs",
                table: "Rgs",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Passaportes",
                table: "Passaportes",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Rgs",
                table: "Rgs");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Passaportes",
                table: "Passaportes");

            migrationBuilder.RenameTable(
                name: "Rgs",
                newName: "RgModel");

            migrationBuilder.RenameTable(
                name: "Passaportes",
                newName: "PassaporteModel");

            migrationBuilder.AddPrimaryKey(
                name: "PK_RgModel",
                table: "RgModel",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PassaporteModel",
                table: "PassaporteModel",
                column: "Id");
        }
    }
}
