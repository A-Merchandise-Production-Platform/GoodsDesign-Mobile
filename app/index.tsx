import React, { useEffect } from "react";
import { useAuthStore } from "@/stores/auth.store";
import { Redirect } from "expo-router";
import { UserRole } from "@/types/user";

const AuthRedirectPage = () => {
  const { isAuth, user, refreshUser } = useAuthStore();

  useEffect(() => {
    const refresh = async () => {
      try {
        await refreshUser();
      } catch (error) {
        console.error("Failed to refresh user", error);
      }
    };

    refresh();
  }, [refreshUser]);

  // If the user is not authenticated, redirect to the Sign-In screen
  if (!isAuth) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  const userRole = user?.role;

  // Determine the redirect path based on the user's role
  let redirectPath: string;

  switch (userRole) {
    case UserRole.ADMIN:
      redirectPath = "/(root)/(adminTabs)";
      break;
    case UserRole.MANAGER:
      redirectPath = "/(root)/(managerTabs)";
      break;
    case UserRole.STAFF:
      redirectPath = "/(root)/(staffTabs)";
      break;
    case UserRole.USER:
    default:
      redirectPath = "/(root)/(customerTabs)/home";
      break;
  }

  // Redirect to the appropriate path based on role
  return <Redirect href={redirectPath as any} />;
};

export default AuthRedirectPage;
