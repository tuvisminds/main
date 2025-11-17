export interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {};
}

export interface SprintMeta {
  sprintName: string;
  goal: string;
  iterationLabel: string;
  startDate: string;
  endDate: string;
  focusArea: string;
  iterationNumber: number;
}

export interface SprintSummary {
  progress: number;
  totalPoints: number;
  completedPoints: number;
  openTasks: number;
  closedTasks: number;
  carryOver: number;
  blockers: number;
  iocaineDoses: number;
}

export interface CapacityPlan {
  teamMembers: number;
  sprintLengthDays: number;
  standardHours: number;
  leaveHours: number;
  bufferHours: number;
  finalHours: number;
  notes: string;
}

export interface VelocityPlan {
  averageStoryPoints: number;
  minStoryPoints: number;
  maxStoryPoints: number;
  trend: "up" | "down" | "steady";
}

export interface EstimationSnapshot {
  toDo: number;
  inProgress: number;
  done: number;
}

export interface SprintPlanningInsights {
  capacity: CapacityPlan;
  velocity: VelocityPlan;
  estimation: EstimationSnapshot;
  sprintCommitment: number;
}

export interface BoardCard {
  id: number;
  reference: string;
  title: string;
  type: "story" | "task" | "bug";
  badge?: string;
  badgeTone?: "green" | "purple" | "blue" | "orange";
  watchers: number;
  comments: number;
  tag?: string;
}

export interface BoardColumn {
  id: string;
  title: string;
  accent: string;
  items: BoardCard[];
}

export interface SprintBoardData {
  userStories: BoardCard[];
  columns: BoardColumn[];
}

export interface SprintAlert {
  label: string;
  message: string;
  severity: "low" | "medium" | "high";
}

export interface SprintDashboardData {
  meta: SprintMeta;
  summary: SprintSummary;
  planning: SprintPlanningInsights;
  board: SprintBoardData;
  alert: SprintAlert;
}
