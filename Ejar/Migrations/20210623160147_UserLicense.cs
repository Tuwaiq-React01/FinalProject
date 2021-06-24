using Microsoft.EntityFrameworkCore.Migrations;

namespace Ejar.Migrations
{
    public partial class UserLicense : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                name: "FK_User_License_LicenseId",
                table: "User",
                column: "LicenseId",
                principalTable: "License",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_User_License_LicenseId",
                table: "User");

            migrationBuilder.DropIndex(
                name: "IX_User_LicenseId",
                table: "User");

            migrationBuilder.DropColumn(
                name: "LicenseId",
                table: "User");
        }
    }
}
