import {
  BoltIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

import type { SprintPlanningInsights } from "@/types";

type SprintPlanningPanelProps = {
  planning: SprintPlanningInsights;
};

export function SprintPlanningPanel({ planning }: SprintPlanningPanelProps) {
  const velocityPercentage = Math.min(
    (planning.velocity.averageStoryPoints / planning.sprintCommitment) * 100,
    100
  );

  const dialDegrees = velocityPercentage * 3.6;
  const velocityDial = {
    background: `conic-gradient(#96d712 ${dialDegrees}deg, rgba(255,255,255,0.1) ${dialDegrees}deg)`,
  };

  return (
    <section className="grid gap-6 lg:grid-cols-3">
      <article className="rounded-3xl border border-white/10 bg-[#0b1120] p-6 text-white shadow-xl shadow-[#1a2842]/40">
        <CardHeading
          icon={UserGroupIcon}
          title="Capacity"
          subtitle="Hours Available"
        />
        <dl className="mt-6 space-y-3 text-sm text-trueGray-300">
          <StatRow
            label={`${planning.capacity.teamMembers} Team Members`}
            value={`${planning.capacity.standardHours} hrs`}
          />
          <StatRow label="Leave" value={`- ${planning.capacity.leaveHours} hrs`} />
          <StatRow
            label="Buffer (Risks + Ops)"
            value={`- ${planning.capacity.bufferHours} hrs`}
          />
        </dl>
        <div className="mt-6 rounded-2xl border border-[#96d712]/40 bg-[#1a2a23] p-4 text-center">
          <p className="text-xs uppercase tracking-wide text-trueGray-400">
            Final Capacity
          </p>
          <p className="text-3xl font-semibold text-[#96d712]">
            {planning.capacity.finalHours} hrs
          </p>
        </div>
        <p className="mt-4 text-xs text-trueGray-500">{planning.capacity.notes}</p>
      </article>

      <article className="rounded-3xl border border-white/10 bg-[#0b1120] p-6 text-white shadow-xl shadow-[#1a2842]/40">
        <CardHeading
          icon={BoltIcon}
          title="Velocity"
          subtitle="Story Points Delivered"
        />
        <div className="mt-6 flex flex-col items-center gap-6">
          <div
            className="relative flex h-44 w-44 items-center justify-center rounded-full border-8 border-white/5"
            style={velocityDial}
          >
            <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#0b1120] text-center">
              <p className="text-xs uppercase tracking-wide text-trueGray-400">
                Average
              </p>
              <p className="text-3xl font-semibold">
                {planning.velocity.averageStoryPoints} SP
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between text-sm text-trueGray-400">
            <span>Range {planning.velocity.minStoryPoints} - {planning.velocity.maxStoryPoints} SP</span>
            <span className="text-[#96d712] capitalize">
              {planning.velocity.trend} trend
            </span>
          </div>
        </div>
        <div className="mt-6 rounded-2xl bg-white/5 p-4 text-center">
          <p className="text-xs uppercase tracking-wide text-trueGray-400">
            Sprint Commitment
          </p>
          <p className="text-2xl font-semibold text-white">
            {planning.sprintCommitment} SP
          </p>
        </div>
      </article>

      <article className="rounded-3xl border border-white/10 bg-[#0b1120] p-6 text-white shadow-xl shadow-[#1a2842]/40">
        <CardHeading
          icon={Squares2X2Icon}
          title="Estimation"
          subtitle="Effort Distribution"
        />
        <div className="mt-6 grid gap-4">
          <EstimationBar
            label="To Do"
            value={planning.estimation.toDo}
            tone="bg-[#7cc5ff]"
          />
          <EstimationBar
            label="In Progress"
            value={planning.estimation.inProgress}
            tone="bg-[#2bb9c7]"
          />
          <EstimationBar
            label="Done"
            value={planning.estimation.done}
            tone="bg-[#96d712]"
          />
        </div>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
          <p className="text-xs uppercase tracking-wide text-trueGray-400">
            Active Cards
          </p>
          <p className="text-2xl font-semibold">
            {planning.estimation.toDo +
              planning.estimation.inProgress +
              planning.estimation.done}
          </p>
        </div>
      </article>
    </section>
  );
}

type CardHeadingProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
};

function CardHeading({ icon: Icon, title, subtitle }: CardHeadingProps) {
  return (
    <header className="flex items-center gap-3">
      <span className="rounded-2xl bg-white/5 p-3 text-[#96d712]">
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-trueGray-400">
          {subtitle}
        </p>
        <p className="text-lg font-semibold">{title}</p>
      </div>
    </header>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-sm text-trueGray-400">{label}</dt>
      <dd className="text-sm font-medium text-white">{value}</dd>
    </div>
  );
}

type EstimationBarProps = {
  label: string;
  value: number;
  tone: string;
};

function EstimationBar({ label, value, tone }: EstimationBarProps) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-trueGray-400">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="mt-2 h-3 rounded-full bg-white/5">
        <div
          className={`h-full rounded-full ${tone}`}
          style={{ width: `${Math.min(value * 10, 100)}%` }}
        />
      </div>
    </div>
  );
}
