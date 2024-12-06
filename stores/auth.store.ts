import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { authApi } from "@/api/auth";
import { User } from "@/types/user";

interface AuthStoreState {
  isAuth: boolean;
  user: User | undefined;
  accessToken: string | undefined;
  refreshToken: string | undefined;
  login: (accessToken: string, refreshToken: string) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

export const defaultState: AuthStoreState = {
  isAuth: false,
  user: undefined,
  accessToken: undefined,
  refreshToken: undefined,
  login: async () => {},
  logout: () => {},
  refreshUser: async () => {},
};

export const useAuthStore = create<AuthStoreState>()(
  persist(
    (set, get) => ({
      ...defaultState,
      login: async (accessToken: string, refreshToken: string) => {
        set({ accessToken, refreshToken });
        if (accessToken && refreshToken) {
          try {
            const response = await authApi.getMe();
            set({ isAuth: true, user: response.data });
          } catch (error) {
            console.error("Login failed", error);
          }
        }
      },
      logout: () => {
        set(defaultState);
      },
      refreshUser: async () => {
        const state = get();
        if (state.accessToken && state.refreshToken) {
          try {
            const response = await authApi.getMe();
            set({ isAuth: true, user: response.data });
          } catch (error) {
            console.error("Failed to refresh user", error);
            set(defaultState);
          }
        }
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
