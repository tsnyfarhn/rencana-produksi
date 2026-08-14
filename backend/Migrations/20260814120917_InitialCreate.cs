using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Planning",
                columns: table => new
                {
                    PlanningId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    RequestCode = table.Column<string>(type: "text", nullable: false),
                    CandidateToken = table.Column<string>(type: "text", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Status = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Planning", x => x.PlanningId);
                });

            migrationBuilder.CreateTable(
                name: "PlanningSlot",
                columns: table => new
                {
                    PlanningSlotId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    PlanningId = table.Column<int>(type: "integer", nullable: false),
                    SlotOrder = table.Column<int>(type: "integer", nullable: false),
                    SlotName = table.Column<string>(type: "text", nullable: false),
                    OriginalQuantity = table.Column<int>(type: "integer", nullable: false),
                    BalancedQuantity = table.Column<int>(type: "integer", nullable: false),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlanningSlot", x => x.PlanningSlotId);
                    table.CheckConstraint("CK_PlanningSlot_BalancedQuantity_NonNegative", "\"BalancedQuantity\" >= 0");
                    table.CheckConstraint("CK_PlanningSlot_OriginalQuantity_NonNegative", "\"OriginalQuantity\" >= 0");
                    table.ForeignKey(
                        name: "FK_PlanningSlot_Planning_PlanningId",
                        column: x => x.PlanningId,
                        principalTable: "Planning",
                        principalColumn: "PlanningId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PlanningSlot_PlanningId",
                table: "PlanningSlot",
                column: "PlanningId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PlanningSlot");

            migrationBuilder.DropTable(
                name: "Planning");
        }
    }
}
