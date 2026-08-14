using Backend.DTOs.Planning;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlanningController : ControllerBase
{
    private readonly PlanningService _planningService;

    public PlanningController(PlanningService planningService)
    {
        _planningService = planningService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var datas = await _planningService.GetAll();

        return Ok(datas); 
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var data = await _planningService.GetById(id);

        if (data == null)
        {
            return NotFound();
        }

        return Ok(data);
    }

    [HttpPost]
    public async Task<IActionResult> Create(CreatePlanningRequest request)
    {
        var datas = await _planningService.Create(request);

        return CreatedAtAction(nameof(GetById), new { id = datas.PlanningId}, datas);
    }
}