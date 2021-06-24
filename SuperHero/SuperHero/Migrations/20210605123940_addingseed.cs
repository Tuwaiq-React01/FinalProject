using Microsoft.EntityFrameworkCore.Migrations;

namespace SuperHero.Migrations
{
    public partial class addingseed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Hero",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "FAS" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Hero",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
