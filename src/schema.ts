import type { DefaultOptionType } from "antd/es/select";

export type RegistrationForm = {
  name: string;
  tg: string;
  birthdate?: unknown;
  city?: string;
  university?: string;
  experience?: string;
  github?: string;
  expectations?: string;
};

export interface PlaceOption extends DefaultOptionType {
  value: string;
  ko: string;
  en: string;
  ru: string;
}


export interface RegisterRequest {
  name: string;
  tg: string;
  birthdate?: string | null;
  city?: string | null;
  expectations?: string | null;
  experience?: string | null;
  github?: string | null;
  university?: string | null;
}

export interface RegisterResponse {
  name: string;
  created_at: string;
}