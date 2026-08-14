using Backend.Data;
using Backend.DTOs.Planning;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services;

public class PlanningService
{
    private readonly AppDbContext _dbContext;

    public PlanningService(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<List<PlanningResponse>> GetAll()
    {
        var datas = await _dbContext.Planning.Include(x => x.Slots).AsNoTracking().ToListAsync();

        return datas.Select(MapToResponse).ToList();
    }

    public async Task<PlanningResponse?> GetById(int id)
    {
        var data = await _dbContext.Planning.Include(x => x.Slots).AsNoTracking().FirstOrDefaultAsync(x => x.PlanningId == id);

        if (data == null)
        {
            return null;
        }

        return MapToResponse(data);
    }

    public async Task<PlanningResponse> Create(CreatePlanningRequest request)
    {
        var data = new Planning
        {
            RequestCode = request.RequestCode,
            CandidateToken = request.CandidateToken,
            CreatedAt = DateTime.UtcNow,
            Status = request.Status
        };

        foreach (var slot in request.Slots)
        {
            data.Slots.Add(new PlanningSlot
            {
                SlotOrder = slot.SlotOrder,
                SlotName = slot.SlotName,
                OriginalQuantity = slot.OriginalQuantity,
                BalancedQuantity = slot.BalancedQuantity,
                IsActive = slot.IsActive
            });
        }

        _dbContext.Planning.Add(data);

        await _dbContext.SaveChangesAsync();

        return MapToResponse(data);
    }

    private static PlanningResponse MapToResponse(Planning planning)
    {
        return new PlanningResponse
        {
            PlanningId = planning.PlanningId,
            RequestCode = planning.RequestCode,
            CandidateToken = planning.CandidateToken,
            CreatedAt = planning.CreatedAt,
            Status = planning.Status,
            Slots = planning.Slots
                .OrderBy(x => x.SlotOrder)
                .Select(x => new PlanningSlotResponse
                {
                    PlanningSlotId = x.PlanningSlotId,
                    SlotOrder = x.SlotOrder,
                    SlotName = x.SlotName,
                    OriginalQuantity = x.OriginalQuantity,
                    BalancedQuantity = x.BalancedQuantity,
                    IsActive = x.IsActive
                })
                .ToList()
        };
    }
}