using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend.Data.Configuration;

public class PlanningSlotConfigurations : IEntityTypeConfiguration<PlanningSlot>
{
    public void Configure(EntityTypeBuilder<PlanningSlot> builder)
    {
        builder.ToTable("PlanningSlot");

        builder.HasKey(x => x.PlanningSlotId);

        builder.Property(x => x.SlotName)
            .IsRequired();

        builder.Property(x => x.OriginalQuantity)
            .IsRequired();
        
        builder.Property(x => x.BalancedQuantity)
            .IsRequired();

        builder.Property(x => x.IsActive)
            .IsRequired();

        builder.HasOne(x => x.Planning)
            .WithMany(x => x.Slots)
            .HasForeignKey(x => x.PlanningId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.ToTable(table =>
        {
            table.HasCheckConstraint(
                "CK_PlanningSlot_OriginalQuantity_NonNegative",
                "\"OriginalQuantity\" >= 0"
            );

            table.HasCheckConstraint(
                "CK_PlanningSlot_BalancedQuantity_NonNegative",
                "\"BalancedQuantity\" >= 0"
            );
        });
    }
}