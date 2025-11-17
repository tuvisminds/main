 "use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import type { SprintDashboardData } from "@/types";

import { SprintBoard } from "./SprintBoard";
import { SprintHeader } from "./SprintHeader";
import { SprintPlanningPanel } from "./SprintPlanningPanel";
import { SprintStatsStrip } from "./SprintStatsStrip";

export function SprintDashboard() {
  const [data, setData] = useState<SprintDashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/sprint", { cache: "no-store" });
      if (!response.ok) {
        throw new Error("Unable to load sprint data. Please try again.");
      }
      const payload: SprintDashboardData = await response.json();
      setData(payload);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unexpected error occurred.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading) {
    return (
      <DashboardState
        variant="loading"
        message="Calculating sprint insights…"
      />
    );
  }

  if (error) {
    return (
      <DashboardState
        variant="error"
        message={error}
        onRetry={loadData}
      />
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="space-y-8">
      <SprintHeader
        meta={data.meta}
        summary={data.summary}
        alert={data.alert}
      />
      <SprintStatsStrip summary={data.summary} />
      <SprintPlanningPanel planning={data.planning} />
      <SprintBoard board={data.board} />
    </div>
  );
}

type DashboardStateProps = {
  variant: "loading" | "error";
  message: string;
  onRetry?: () => void;
};

function DashboardState({ variant, message, onRetry }: DashboardStateProps) {
  const isLoading = variant === "loading";

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center shadow-xl shadow-[#1a2842]/30 backdrop-blur">
      <div className="flex flex-col items-center gap-4">
        <span
          className={`rounded-full p-4 ${
            isLoading ? "bg-[#2bb9c7]/10" : "bg-[#ffb347]/10"
          }`}
        >
          <ArrowPathIcon
            className={`h-8 w-8 ${
              isLoading
                ? "text-[#2bb9c7] animate-spin"
                : "text-[#ffb347] animate-pulse"
            }`}
          />
        </span>
        <p className="text-lg font-medium text-white">{message}</p>
        {!isLoading && onRetry ? (
          <button
            onClick={onRetry}
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-[#96d712] hover:text-[#96d712]"
          >
            Retry
          </button>
        ) : null}
      </div>
    </div>
  );
}
