import type { UserEntity } from "../types/user.js";

declare let NativeModules: {
  NativeLocalStorageModule: {
    setStorageItem(key: string, value: string): void;
    getStorageItem(key: string): string | null;
    clearStorage(): void;
  };
};

const STORAGE_KEYS = {
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  user: "user",
};

export const AuthService = {
  async login(payload: {
    accessToken: string;
    refreshToken: string;
    user: UserEntity;
  }): Promise<void> {
    NativeModules.NativeLocalStorageModule.setStorageItem(
      STORAGE_KEYS.accessToken,
      payload.accessToken
    );
    NativeModules.NativeLocalStorageModule.setStorageItem(
      STORAGE_KEYS.refreshToken,
      payload.refreshToken
    );
    NativeModules.NativeLocalStorageModule.setStorageItem(
      STORAGE_KEYS.user,
      JSON.stringify(payload.user)
    );
  },

  async logout(): Promise<void> {
    NativeModules.NativeLocalStorageModule.clearStorage();
    console.log("Logged out.");
  },

  async getAccessToken(): Promise<string | null> {
    return NativeModules.NativeLocalStorageModule.getStorageItem(
      STORAGE_KEYS.accessToken
    );
  },

  async getUser(): Promise<UserEntity | null> {
    const userStr = NativeModules.NativeLocalStorageModule.getStorageItem(
      STORAGE_KEYS.user
    );
    return userStr ? JSON.parse(userStr) : null;
  },
};
