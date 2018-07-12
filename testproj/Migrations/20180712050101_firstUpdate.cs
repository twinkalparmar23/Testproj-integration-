using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace testproj.Migrations
{
    public partial class firstUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "exp",
                table: "Employee",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "qual",
                table: "Employee",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "exp",
                table: "Employee");

            migrationBuilder.DropColumn(
                name: "qual",
                table: "Employee");
        }
    }
}
