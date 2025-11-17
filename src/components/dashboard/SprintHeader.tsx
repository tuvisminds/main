import {
  CalendarDaysIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

import type { SprintAlert, SprintMeta, SprintSummary } from "@/types";

type SprintHeaderProps = {
  meta: SprintMeta;
  summary: SprintSummary;
  alert: SprintAlert;
};

export function SprintHeader({ meta, summary, alert }: SprintHeaderProps) {
  const severityTone = {
    low: "text-[#96d712]",
    medium: "text-[#ffb347]",
    high: "text-[#ff6b6b]",
  }[alert.severity];

  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f172a] via-[#111] to-[#1a2842] p-6 text-white shadow-2xl shadow-[#1a2842]/40">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#7cc5ff]">
            Active Sprint
          </p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight">
            {meta.sprintName}
          </h1>
          <p className="mt-2 text-base text-trueGray-300">{meta.goal}</p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-wide text-trueGray-400">
              Progress
            </p>
            <p className="text-4xl font-bold text-[#2bb9c7]">
              {summary.progress}%
            </p>
            <p className="text-xs text-trueGray-400">
              {summary.completedPoints}/{summary.totalPoints} pts
            </p>
          </div>
          <div className="h-12 w-px bg-white/10" />
          <div className="space-y-1 text-sm text-trueGray-300">
            <p className="font-medium text-white">Iteration #{meta.iterationNumber}</p>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wide">
              <CalendarDaysIcon className="h-4 w-4 text-[#96d712]" />
              {meta.iterationLabel}
            </div>
            <p className="text-xs text-trueGray-400">
              {formatDate(meta.startDate)} – {formatDate(meta.endDate)}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-trueGray-400">
            Focus Area
          </p>
          <p className="mt-1 text-base text-white">{meta.focusArea}</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-trueGray-400">
            Sprint Alert
          </p>
          <div className="mt-1 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-trueGray-200">
            <ExclamationTriangleIcon className={`h-5 w-5 ${severityTone}`} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white">
                {alert.label}
              </p>
              <p>{alert.message}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-xs uppercase tracking-wide text-trueGray-500">
          <span>Completion</span>
          <span>
            {summary.completedPoints} / {summary.totalPoints} story points
          </span>
        </div>
        <div className="mt-2 h-3 rounded-full bg-white/10">
          <div
            className="h-full rounded-full tuvis-gradient"
            style={{ width: `${Math.min(summary.progress, 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
}

function formatDate(value: string): string {
  const formatter = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
  });
  return formatter.format(new Date(value));
}
