import { useState } from "@lynx-js/react";
import { PictureEnum, pictureMap } from "../components/images.jsx";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) return;

    setIsLoading(true);
    alert(`Login attempt with: ${email} ${password}`);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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
          bindtap={handleLogin}
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
