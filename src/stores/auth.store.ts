import { create } from "zustand";
import type { UserEntity } from "../types/user.js";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: UserEntity | null;
  login: (payload: {
    accessToken: string;
    refreshToken: string;
    user: UserEntity;
  }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  refreshToken: null,
  user: null,
  login: ({ accessToken, refreshToken, user }) => {
    set({ accessToken, refreshToken, user });
  },
  logout: () => {
    set({ accessToken: null, refreshToken: null, user: null });
  },
}));
