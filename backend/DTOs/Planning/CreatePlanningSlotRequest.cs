namespace Backend.DTOs.Planning;

public class CreatePlanningSlotRequest
{
    public int SlotOrder { get; set; }

    public string SlotName { get; set; } = string.Empty;

    public int OriginalQuantity { get; set; }

    public int BalancedQuantity { get; set; }

    public bool IsActive { get; set; }
}