import {
  ChatBubbleLeftEllipsisIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import type { ReactNode } from "react";

import type { BoardCard, SprintBoardData } from "@/types";

type SprintBoardProps = {
  board: SprintBoardData;
};

export function SprintBoard({ board }: SprintBoardProps) {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-1 text-white md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#7cc5ff]">
            Delivery Board
          </p>
          <h2 className="text-2xl font-semibold">
            Taiga-style sprint tracking board
          </h2>
        </div>
        <p className="text-sm text-trueGray-400">
          Mirrors the workflow from your current Taiga board for instant parity.
        </p>
      </div>
      <div className="overflow-x-auto">
        <div className="flex min-w-[960px] gap-4">
          <BoardLane title="User Story" accent="border-[#7cc5ff]/40">
            {board.userStories.map((item) => (
              <BoardCardView key={item.id} card={item} />
            ))}
          </BoardLane>
          {board.columns.map((column) => (
            <BoardLane key={column.id} title={column.title} accent={column.accent}>
              {column.items.length ? (
                column.items.map((item) => (
                  <BoardCardView key={item.id} card={item} />
                ))
              ) : (
                <EmptyLane />
              )}
            </BoardLane>
          ))}
        </div>
      </div>
    </section>
  );
}

type BoardLaneProps = {
  title: string;
  accent: string;
  children: ReactNode;
};

function BoardLane({ title, accent, children }: BoardLaneProps) {
  return (
    <div
      className={`flex w-60 flex-col gap-4 rounded-3xl border bg-white/[0.03] p-4 text-white ${accent}`}
    >
      <div className="text-sm font-semibold uppercase tracking-wide text-trueGray-400">
        {title}
      </div>
      {children}
    </div>
  );
}

type BoardCardViewProps = {
  card: BoardCard;
};

function BoardCardView({ card }: BoardCardViewProps) {
  const badgeTone = getBadgeTone(card.badgeTone);

  return (
    <article className="space-y-3 rounded-2xl border border-white/10 bg-[#0f172a] p-4 shadow-lg shadow-black/20">
      <header className="flex items-center justify-between">
        <span className="text-xs font-semibold text-[#7cc5ff]">
          {card.reference}
        </span>
        {card.badge ? (
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${badgeTone}`}
          >
            {card.badge}
          </span>
        ) : null}
      </header>
      <p className="text-sm font-medium text-white">{card.title}</p>
      <footer className="flex items-center justify-between text-xs text-trueGray-400">
        <span className="inline-flex items-center gap-1">
          <EyeIcon className="h-4 w-4" />
          {card.watchers}
        </span>
        <span className="inline-flex items-center gap-1">
          <ChatBubbleLeftEllipsisIcon className="h-4 w-4" />
          {card.comments}
        </span>
        {card.tag ? (
          <span className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] uppercase tracking-wide text-trueGray-200">
            {card.tag}
          </span>
        ) : null}
      </footer>
    </article>
  );
}

function EmptyLane() {
  return (
    <div className="flex flex-1 items-center justify-center rounded-2xl border border-dashed border-white/10 p-6 text-center text-xs text-trueGray-500">
      No cards yet
    </div>
  );
}

function getBadgeTone(
  tone: BoardCard["badgeTone"] = "blue"
): string {
  switch (tone) {
    case "green":
      return "bg-[#17371f] text-[#96d712]";
    case "purple":
      return "bg-[#241731] text-[#c084fc]";
    case "orange":
      return "bg-[#3a2412] text-[#f97316]";
    case "blue":
    default:
      return "bg-[#142438] text-[#7cc5ff]";
  }
}
