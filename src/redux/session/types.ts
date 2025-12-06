import type { LegislationTag } from "@/api/baseApi/legislation/types";

export type SessionState = {
  accessToken?: string;
  selectedFields?: LegislationTag[];
};