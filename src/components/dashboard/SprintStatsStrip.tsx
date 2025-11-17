import {
  ClipboardDocumentListIcon,
  LockClosedIcon,
  QueueListIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

import type { SprintSummary } from "@/types";

type SprintStatsStripProps = {
  summary: SprintSummary;
};

const statConfigs: Array<{
  key: keyof SprintSummary;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  format: (value: number) => string | number;
}> = [
  {
    key: "totalPoints",
    label: "Total Points",
    icon: QueueListIcon,
    format: (value: number) => `${value} pts`,
  },
  {
    key: "completedPoints",
    label: "Completed",
    icon: ClipboardDocumentListIcon,
    format: (value: number) => `${value} pts`,
  },
  {
    key: "openTasks",
    label: "Open Tasks",
    icon: ShieldExclamationIcon,
    format: (value: number) => value,
  },
  {
    key: "closedTasks",
    label: "Closed Tasks",
    icon: LockClosedIcon,
    format: (value: number) => value,
  },
  {
    key: "carryOver",
    label: "Carry Over",
    icon: QueueListIcon,
    format: (value: number) => value,
  },
  {
    key: "blockers",
    label: "Blockers",
    icon: ShieldExclamationIcon,
    format: (value: number) => value,
  },
  {
    key: "iocaineDoses",
    label: "Iocaine Doses",
    icon: ClipboardDocumentListIcon,
    format: (value: number) => value,
  },
];

export function SprintStatsStrip({ summary }: SprintStatsStripProps) {
  return (
    <section className="rounded-3xl border border-white/5 bg-white/5 p-4 shadow-inner shadow-black/20 backdrop-blur">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {statConfigs.map((stat) => {
            const Icon = stat.icon;
            const value = summary[stat.key];
          return (
            <article
              key={stat.key}
              className="rounded-2xl border border-white/10 bg-[#0f172a]/70 p-4 text-white"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-white/5 p-2 text-[#96d712]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-trueGray-400">
                    {stat.label}
                  </p>
                  <p className="text-xl font-semibold">
                    {stat.format(value)}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
