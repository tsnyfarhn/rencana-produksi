export interface CreatePlanningRequest {
  requestCode: string;
  slots: CreatePlanningSlotRequest[];
}

export interface CreatePlanningSlotRequest {
  productId: number;
  quantity: number;
}

export interface PlanningResponse {
  id: number;
  requestCode: string;
  createdAt: string;
  status: string;
  slots: PlanningSlotResponse[];
}

export interface PlanningSlotResponse {
  id: number;
  productId: number;
  quantity: number;
}