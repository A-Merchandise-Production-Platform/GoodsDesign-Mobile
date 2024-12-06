import { useEffect } from "react";
import { Stack, router } from "expo-router";
import { useAuthStore } from "@/stores/auth.store";
import { userService } from "@/services/users.service";
import React from "react";

const Layout = () => {
  const { user, isAuth } = useAuthStore();

  useEffect(() => {
    if (!isAuth) {
      router.replace("/(auth)/sign-in" as const);
      return;
    }

    if (user && user.role) {
      const tabsRole = userService.getUserTabsByRole(user.role);
      try {
        let path = "";
        switch (tabsRole) {
          case "userTabs":
            path = "/(root)/userTabs/home";
            break;
          case "staffTabs":
            path = "/(root)/staffTabs/home";
            break;
          case "managerTabs":
            path = "/(root)/managerTabs/home";
            break;
          case "adminTabs":
            path = "/(root)/adminTabs/home";
            break;
          default:
            path = "/(auth)/sign-in";
            break;
        }
        router.replace(path as any); // Type assertion for path
      } catch (err) {
        console.error("Failed to navigate based on user role:", err);
      }
    }
  }, [isAuth, user]);

  return (
    <Stack>
      <Stack.Screen name="(userTabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(staffTabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(managerTabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(adminTabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
