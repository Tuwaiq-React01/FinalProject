using Microsoft.EntityFrameworkCore.Migrations;

namespace PositiveQuote.Migrations
{
    public partial class initialRelationV3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Speaker_Name",
                table: "Speakers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Quote_Content",
                table: "Quotes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Speaker_ID",
                table: "Quotes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Speaker_ID1",
                table: "Quotes",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Quotes_Speaker_ID1",
                table: "Quotes",
                column: "Speaker_ID1");

            migrationBuilder.AddForeignKey(
                name: "FK_Quotes_Speakers_Speaker_ID1",
                table: "Quotes",
                column: "Speaker_ID1",
                principalTable: "Speakers",
                principalColumn: "Speaker_ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Quotes_Speakers_Speaker_ID1",
                table: "Quotes");

            migrationBuilder.DropIndex(
                name: "IX_Quotes_Speaker_ID1",
                table: "Quotes");

            migrationBuilder.DropColumn(
                name: "Speaker_ID",
                table: "Quotes");

            migrationBuilder.DropColumn(
                name: "Speaker_ID1",
                table: "Quotes");

            migrationBuilder.AlterColumn<string>(
                name: "Speaker_Name",
                table: "Speakers",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "Quote_Content",
                table: "Quotes",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }
    }
}
