export const heroStats = [
  { label: "Active learners", value: "50K+" },
  { label: "Expert courses", value: "1,200+" },
  { label: "Instructors", value: "350+" },
  { label: "Avg. rating", value: "4.9/5" },
] as const;

export const heroHighlights = [
  "Self-paced & live classes",
  "Industry-recognized certificates",
  "Progress tracking & analytics",
] as const;

export const heroPreviewLessons = [
  { title: "Introduction to UX Design", progress: 100, status: "completed" as const },
  { title: "Design Systems in Practice", progress: 68, status: "in-progress" as const },
  { title: "Prototyping with Figma", progress: 0, status: "locked" as const },
] as const;
