import type { PlaceOption, RegisterRequest, RegisterResponse } from "./schema";

export const filterPlaceOptions = (input: string, option?: PlaceOption) => {
  if (!option) return false;

  const search = input.trim().toLowerCase();
  const ko = (option.value ?? "").toLowerCase();
  const en = (option.label as any)?.props?.children?.[1]?.props?.children?.toLowerCase() ?? "";

  return ko.includes(search) || en.includes(search);
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export async function registerUser(payload: RegisterRequest): Promise<RegisterResponse> {
  const response = await fetch(`${API_BASE_URL}/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      tg: payload.tg,
      birthdate: payload.birthdate || null,
      city: payload.city || null,
      expectations: payload.expectations || null,
      experience: payload.experience || null,
      github: payload.github || null,
      university: payload.university || null,
    }),
  });

  if (!response.ok) {
    let errorMessage = `Ошибка сервера: ${response.status}`;
    try {
      const errorData = await response.json();
      if (response.status === 422 && errorData.detail) {
        errorMessage = `Ошибка валидации: ${errorData.detail.map((e: any) => e.msg).join(", ")}`;
      }
    } catch {}
    throw new Error(errorMessage);
  }

  return response.json();
}