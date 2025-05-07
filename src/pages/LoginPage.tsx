import { useState, useEffect } from "@lynx-js/react";
import { useNavigate } from "react-router";
import { PictureEnum, pictureMap } from "../components/images.jsx";
import { useAuthStore } from "../stores/auth.store.js";
import { API_URL } from "../graphql/constants.js";
import { LOGIN_MUTATION } from "../graphql/queries/auth.js";

export default function LoginPage() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const login = useAuthStore((state) => state.login);
  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    if (accessToken) {
      nav("/task", { replace: true });
    }
  }, [accessToken, nav]);

  const handleLogin = async () => {
    if (!email || !password) {
      setNotification("Email and password are required");
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: LOGIN_MUTATION,
          variables: {
            loginInput: {
              email: email,
              password: password,
            },
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      if (result.errors) {
        const errorMessage =
          result.errors[0]?.message || "An error occurred during login.";
        setNotification(errorMessage);
        return;
      }

      const loginResult = result.data?.login;

      if (!loginResult) {
        setNotification("Login failed: No data returned.");
        return;
      }

      login({
        accessToken: loginResult.accessToken,
        refreshToken: loginResult.refreshToken,
        user: loginResult.user,
      });
      setNotification("Login successful");
      console.log("Login successful");
      nav("/task", { replace: true });
    } catch (error) {
      setNotification(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
      console.error("Login error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.detail.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.detail.value);
  };

  return (
    <view className="flex items-center justify-center px-6 py-16 bg-white h-screen">
      <view className="w-full max-w-lg shadow rounded-3xl p-6 -mt-24 bg-white">
        {/* Header */}
        <view className="flex items-center mb-10">
          <image
            className="w-20 h-20 mb-4"
            src={pictureMap[PictureEnum.Logo].src}
          />
          <text className="text-4xl font-bold text-slate-800">GoodsDesign</text>
          <text className="text-lg text-slate-500 mt-2">
            Sign in to your staff account
          </text>
        </view>

        {/* Email Field */}
        <view className="mb-6">
          <text className="text-base font-medium text-slate-700 mb-2">
            Email
          </text>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            bindinput={handleEmailChange}
            className="w-full h-14 px-5 border border-slate-300 rounded-xl text-lg bg-white"
          />
        </view>

        {/* Password Field */}
        <view className="mb-8">
          <text className="text-base font-medium text-slate-700 mb-2">
            Password
          </text>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            bindinput={handlePasswordChange}
            className="w-full h-14 px-5 border border-slate-300 rounded-xl text-lg bg-white"
          />
        </view>

        {/* Login Button */}
        <view
          bindtap={handleLogin}
          className={`h-14 flex items-center justify-center rounded-xl ${
            isLoading ? "bg-indigo-400" : "bg-indigo-500"
          } ${!email || !password ? "opacity-60" : "opacity-100"}`}
        >
          <text className="text-white text-lg font-semibold">
            {isLoading ? "Signing in..." : "Sign in"}
          </text>
        </view>

        {/* Notification Display */}
        {notification && (
          <view className="mt-4 p-4 bg-indigo-100 rounded-xl">
            <text className="text-indigo-600 mt-1">{notification}</text>
          </view>
        )}
      </view>
    </view>
  );
}
