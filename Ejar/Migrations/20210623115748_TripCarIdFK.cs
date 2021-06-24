using Microsoft.EntityFrameworkCore.Migrations;

namespace Ejar.Migrations
{
    public partial class TripCarIdFK : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Trip_Car_CarModelId",
                table: "Trip");

            migrationBuilder.DropIndex(
                name: "IX_Trip_CarModelId",
                table: "Trip");

            migrationBuilder.DropColumn(
                name: "CarModelId",
                table: "Trip");

            migrationBuilder.RenameColumn(
                name: "Cid",
                table: "Trip",
                newName: "CarId");

            migrationBuilder.CreateIndex(
                name: "IX_Trip_CarId",
                table: "Trip",
                column: "CarId");

            migrationBuilder.AddForeignKey(
                name: "FK_Trip_Car_CarId",
                table: "Trip",
                column: "CarId",
                principalTable: "Car",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Trip_Car_CarId",
                table: "Trip");

            migrationBuilder.DropIndex(
                name: "IX_Trip_CarId",
                table: "Trip");

            migrationBuilder.RenameColumn(
                name: "CarId",
                table: "Trip",
                newName: "Cid");

            migrationBuilder.AddColumn<int>(
                name: "CarModelId",
                table: "Trip",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Trip_CarModelId",
                table: "Trip",
                column: "CarModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Trip_Car_CarModelId",
                table: "Trip",
                column: "CarModelId",
                principalTable: "Car",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
