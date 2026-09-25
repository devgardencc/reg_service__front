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

export type PlaceOption = {
  value: string;
  label: React.ReactNode;
};


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