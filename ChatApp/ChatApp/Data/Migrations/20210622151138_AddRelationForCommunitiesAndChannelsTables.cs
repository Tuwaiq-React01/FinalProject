using Microsoft.EntityFrameworkCore.Migrations;

namespace ChatApp.Data.Migrations
{
    public partial class AddRelationForCommunitiesAndChannelsTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CommunityId",
                table: "Channels",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Channels_CommunityId",
                table: "Channels",
                column: "CommunityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Channels_Communities_CommunityId",
                table: "Channels",
                column: "CommunityId",
                principalTable: "Communities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Channels_Communities_CommunityId",
                table: "Channels");

            migrationBuilder.DropIndex(
                name: "IX_Channels_CommunityId",
                table: "Channels");

            migrationBuilder.DropColumn(
                name: "CommunityId",
                table: "Channels");
        }
    }
}
