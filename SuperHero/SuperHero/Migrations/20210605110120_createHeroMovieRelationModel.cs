using Microsoft.EntityFrameworkCore.Migrations;

namespace SuperHero.Migrations
{
    public partial class createHeroMovieRelationModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "HeroMovie",
                columns: table => new
                {
                    HeroId = table.Column<int>(nullable: false),
                    MovieId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HeroMovie", x => new { x.HeroId, x.MovieId });
                    table.ForeignKey(
                        name: "FK_HeroMovie_Hero_HeroId",
                        column: x => x.HeroId,
                        principalTable: "Hero",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HeroMovie_Movie_MovieId",
                        column: x => x.MovieId,
                        principalTable: "Movie",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_HeroMovie_MovieId",
                table: "HeroMovie",
                column: "MovieId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HeroMovie");
        }
    }
}
