import React, { useState } from "react";
import { View, TextInput, Text, Pressable, Alert } from "react-native";
import { useAuthStore } from "@/stores/auth.store"; // Access Zustand store
import { router } from "expo-router";
import { userService } from "@/services/users.service"; // Import userService for role-based navigation

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthStore(); // Retrieve the login method from Zustand store

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both fields");
      return;
    }

    try {
      // Mock API call for login
      const { accessToken, refreshToken } = await mockLoginAPI(email, password); // Replace with actual login API
      await login(accessToken, refreshToken); // Call the login function from Zustand

      // Redirect to the appropriate screen based on the user's role
      const tabsRole = userService.getUserTabsByRole("USER"); // Replace with the correct role dynamically
      router.replace(`/(${tabsRole})/home`);
    } catch (error) {
      console.error("Login failed", error);
      Alert.alert("Error", "Invalid credentials. Please try again.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Sign In
      </Text>

      <TextInput
        style={{
          height: 50,
          borderColor: "#ccc",
          borderWidth: 1,
          paddingLeft: 10,
          marginBottom: 20,
        }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={{
          height: 50,
          borderColor: "#ccc",
          borderWidth: 1,
          paddingLeft: 10,
          marginBottom: 20,
        }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable
        onPress={handleSignIn}
        style={{
          backgroundColor: "#007BFF",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Sign In</Text>
      </Pressable>

      <Text style={{ textAlign: "center", marginTop: 20 }}>
        Don't have an account?{" "}
        <Text
          style={{ color: "#007BFF" }}
          onPress={() => router.push("/(auth)/sign-up")}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

// Mock API login function, replace with real API integration
const mockLoginAPI = async (email: string, password: string) => {
  // This should be replaced with actual API logic
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "user@example.com" && password === "password123") {
        resolve({
          accessToken: "mock-access-token",
          refreshToken: "mock-refresh-token",
        });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};

export default SignIn;
