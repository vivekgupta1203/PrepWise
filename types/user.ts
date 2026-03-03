export type User = {
  id: string;
  name: string;
  email: string;
  image?: string | null;   
  plan: "free" | "pro";
  subscriptionStatus: "inactive" | "active";
  interviewCount: number;
};