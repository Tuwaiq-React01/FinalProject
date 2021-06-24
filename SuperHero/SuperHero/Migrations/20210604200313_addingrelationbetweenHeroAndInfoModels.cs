using Microsoft.EntityFrameworkCore.Migrations;

namespace SuperHero.Migrations
{
    public partial class addingrelationbetweenHeroAndInfoModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "HeroId",
                table: "Info",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Info_HeroId",
                table: "Info",
                column: "HeroId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Info_Hero_HeroId",
                table: "Info",
                column: "HeroId",
                principalTable: "Hero",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Info_Hero_HeroId",
                table: "Info");

            migrationBuilder.DropIndex(
                name: "IX_Info_HeroId",
                table: "Info");

            migrationBuilder.DropColumn(
                name: "HeroId",
                table: "Info");
        }
    }
}
