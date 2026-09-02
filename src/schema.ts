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
