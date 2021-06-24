using Microsoft.EntityFrameworkCore.Migrations;
using MySql.Data.EntityFrameworkCore.Metadata;

namespace SuperHero.Migrations
{
    public partial class createInfoModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Info",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    FullName = table.Column<string>(nullable: true),
                    Intelligence = table.Column<string>(nullable: true),
                    Strength = table.Column<string>(nullable: true),
                    Speed = table.Column<string>(nullable: true),
                    Power = table.Column<string>(nullable: true),
                    Combat = table.Column<string>(nullable: true),
                    PlaceOfBirth = table.Column<string>(nullable: true),
                    FirstAppearance = table.Column<string>(nullable: true),
                    Alignment = table.Column<string>(nullable: true),
                    Gender = table.Column<string>(nullable: true),
                    Race = table.Column<string>(nullable: true),
                    Height = table.Column<string>(nullable: true),
                    Weight = table.Column<string>(nullable: true),
                    EyeColor = table.Column<string>(nullable: true),
                    HairColor = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Info", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Info");
        }
    }
}
