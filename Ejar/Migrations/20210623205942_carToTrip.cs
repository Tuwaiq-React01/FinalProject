using Microsoft.EntityFrameworkCore.Migrations;

namespace Ejar.Migrations
{
    public partial class carToTrip : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CarImage",
                table: "Trip",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CarName",
                table: "Trip",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CarImage",
                table: "Trip");

            migrationBuilder.DropColumn(
                name: "CarName",
                table: "Trip");
        }
    }
}
