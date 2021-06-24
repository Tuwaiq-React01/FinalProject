using Microsoft.EntityFrameworkCore.Migrations;

namespace Ejar.Migrations
{
    public partial class TripsAndCars : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Car_User_UserId",
                table: "Car");

            migrationBuilder.DropForeignKey(
                name: "FK_Trip_User_UserId",
                table: "Trip");

            migrationBuilder.DropForeignKey(
                name: "FK_User_License_LicenseId",
                table: "User");

            migrationBuilder.DropIndex(
                name: "IX_User_LicenseId",
                table: "User");

            migrationBuilder.DropColumn(
                name: "LicenseId",
                table: "User");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Trip",
                newName: "AccountId");

            migrationBuilder.RenameIndex(
                name: "IX_Trip_UserId",
                table: "Trip",
                newName: "IX_Trip_AccountId");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Car",
                newName: "AccountId");

            migrationBuilder.RenameIndex(
                name: "IX_Car_UserId",
                table: "Car",
                newName: "IX_Car_AccountId");

            migrationBuilder.AddForeignKey(
                name: "FK_Car_Account_AccountId",
                table: "Car",
                column: "AccountId",
                principalTable: "Account",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Trip_Account_AccountId",
                table: "Trip",
                column: "AccountId",
                principalTable: "Account",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Car_Account_AccountId",
                table: "Car");

            migrationBuilder.DropForeignKey(
                name: "FK_Trip_Account_AccountId",
                table: "Trip");

            migrationBuilder.RenameColumn(
                name: "AccountId",
                table: "Trip",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Trip_AccountId",
                table: "Trip",
                newName: "IX_Trip_UserId");

            migrationBuilder.RenameColumn(
                name: "AccountId",
                table: "Car",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Car_AccountId",
                table: "Car",
                newName: "IX_Car_UserId");

            migrationBuilder.AddColumn<int>(
                name: "LicenseId",
                table: "User",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_User_LicenseId",
                table: "User",
                column: "LicenseId");

            migrationBuilder.AddForeignKey(
                name: "FK_Car_User_UserId",
                table: "Car",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Trip_User_UserId",
                table: "Trip",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_User_License_LicenseId",
                table: "User",
                column: "LicenseId",
                principalTable: "License",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
