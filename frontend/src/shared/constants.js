export const NOTE_STATES = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  WONT_DO: "wont_do",
  COMPLETED: "completed",
};

export const NOTE_IMAGES = {
  add: "add_round_duotone.svg",
  in_progress: "time_atack_duotone.svg",
  wont_do: "close_ring_duotone.svg",
  completed: "done_round_duotone.svg",
};

export const NOTES_MOCK = [
  {
    id: 1,
    title: "Complete project report",
    description: "Finalize the quarterly report and submit it to the manager.",
    icon: "📄",
    status: NOTE_STATES.IN_PROGRESS,
  },
  {
    id: 2,
    title: "Team meeting",
    description: "Discuss project milestones and upcoming tasks.",
    icon: "🗓️",
    status: NOTE_STATES.TODO,
  },
  {
    id: 3,
    title: "Code review",
    description: "Review the latest pull requests and provide feedback.",
    icon: "💻",
    status: NOTE_STATES.COMPLETED,
  },
  {
    id: 4,
    title: "Prepare presentation",
    description: "Create slides for the upcoming client meeting.",
    icon: "📊",
    status: NOTE_STATES.IN_PROGRESS,
  },
  {
    id: 5,
    title: "Call supplier",
    description: "Follow up on the pending order shipment details.",
    icon: "📞",
    status: NOTE_STATES.TODO,
  },
  {
    id: 6,
    title: "Update documentation",
    description: "Add the latest API changes to the team wiki.",
    icon: "📝",
    status: NOTE_STATES.WONT_DO,
  },
];
