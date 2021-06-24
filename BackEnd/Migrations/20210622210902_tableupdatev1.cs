using Microsoft.EntityFrameworkCore.Migrations;

namespace PositiveQuote.Migrations
{
    public partial class tableupdatev1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Quotes_Speakers_Speaker_ID1",
                table: "Quotes");

            migrationBuilder.DropTable(
                name: "Speakers");

            migrationBuilder.DropIndex(
                name: "IX_Quotes_Speaker_ID1",
                table: "Quotes");

            migrationBuilder.DropColumn(
                name: "Speaker_ID",
                table: "Quotes");

            migrationBuilder.DropColumn(
                name: "Speaker_ID1",
                table: "Quotes");

            migrationBuilder.AddColumn<string>(
                name: "Speaker_Nmae",
                table: "Quotes",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Speaker_Nmae",
                table: "Quotes");

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

            migrationBuilder.CreateTable(
                name: "Speakers",
                columns: table => new
                {
                    Speaker_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Speaker_Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Speakers", x => x.Speaker_ID);
                });

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
    }
}
