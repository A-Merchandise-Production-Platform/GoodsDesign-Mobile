import { useState } from "@lynx-js/react";
import { useNavigate } from "react-router";
import { PictureEnum, pictureMap } from "../components/images.jsx";
import { AuthService } from "../stores/auth.store.js";
import { API_URL } from "../graphql/constants.js";
import { LOGIN_MUTATION } from "../graphql/queries/auth.js";
export default function LoginPage() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) return;
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
              email,
              password,
            },
          },
        }),
      });

      const result = await response.json();
      const loginResult = result?.data?.login;

      if (loginResult) {
        await AuthService.login({
          accessToken: loginResult.accessToken,
          refreshToken: loginResult.refreshToken,
          user: loginResult.user,
        });
        console.log("Login successful");
      } else {
        alert(result.errors?.[0]?.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error", error);
      alert("Network or server error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <view className="flex flex-1 justify-center items-center px-6 py-16 bg-white h-screen">
      <view className="w-full max-w-lg shadow-lg rounded-3xl p-6 -mt-24 bg-white">
        {/* Header */}
        <view className="flex flex-col items-center mb-10">
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
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-14 px-5 border border-slate-300 rounded-xl text-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-14 px-5 border border-slate-300 rounded-xl text-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </view>

        {/* Login Button */}
        <view
          bindtap={() => {
            handleLogin();
          }}
          className={`h-14 flex justify-center items-center rounded-xl transition-all duration-200 ${
            isLoading ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"
          } ${!email || !password ? "opacity-60" : "opacity-100"}`}
        >
          <text className="text-white text-lg font-semibold">
            {isLoading ? "Signing in..." : "Sign in"}
          </text>
        </view>
      </view>
    </view>
  );
}
