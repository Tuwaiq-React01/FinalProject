using Microsoft.EntityFrameworkCore.Migrations;

namespace PositiveQuote.Migrations
{
    public partial class initialV2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Quote",
                table: "Quotes",
                newName: "Quote_Content");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Quote_Content",
                table: "Quotes",
                newName: "Quote");
        }
    }
}
