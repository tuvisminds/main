import { NextResponse } from "next/server";

import { sprintDashboardData } from "@/data/sprint";

export async function GET() {
  return NextResponse.json(sprintDashboardData, {
    headers: {
      "Cache-Control": "no-store, must-revalidate",
    },
  });
}
