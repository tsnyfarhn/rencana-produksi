import type { CreatePlanningRequest, PlanningResponse } from "../types/planning";
import API_BASE_URL from "./Api"

const ENDPOINT = `${API_BASE_URL}/Planning`;

export async function getPlannings(): Promise<PlanningResponse[]> {
    const response = await fetch(ENDPOINT)

    if (!response.ok) {
        throw new Error("Failed to fetch plannings");
    }

    return response.json();
}

export async function getPlanningsById(id: number): Promise<PlanningResponse> {
    const response = await fetch(`${ENDPOINT}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch planning");
    }

    return response.json();
}

export async function createPlannings(plannings: CreatePlanningRequest): Promise<PlanningResponse> {
    const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(plannings),
    });

    if (!response.ok) {
        throw new Error(await response.text());
    }

    return response.json();
}