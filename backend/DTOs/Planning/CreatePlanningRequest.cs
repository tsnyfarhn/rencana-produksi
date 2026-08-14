namespace Backend.DTOs.Planning;

public class CreatePlanningRequest
{
    public string RequestCode { get; set; } = string.Empty;

    public string CandidateToken { get; set; } = string.Empty;

    public string Status { get; set; } = string.Empty;

    public List<CreatePlanningSlotRequest> Slots { get; set; } = new();
}