import { useState } from "@lynx-js/react"
import { PictureEnum, pictureMap } from "../components/images.jsx"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = () => {
    if (!email || !password) return

    setIsLoading(true)
    alert(`Login attempt with: ${email} ${password}`)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <view
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f8fafc",
      }}
    >
      <view
        style={{
          width: "100%",
          maxWidth: 400,
          padding: 24,
          backgroundColor: "#ffffff",
          borderRadius: 12,
        }}
      >
        {/* Logo and App Name */}
        <view
          style={{
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <image
            style={{
              width: "80%",
              aspectRatio: pictureMap[PictureEnum.Logo].width / pictureMap[PictureEnum.Logo].height,
              marginBottom: 16,
            }}
            src={pictureMap[PictureEnum.Logo].src}
          />
          <text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: "#1e293b",
              marginTop: 8,
            }}
          >
            Lynx
          </text>
          <text
            style={{
              fontSize: 16,
              color: "#64748b",
              marginTop: 4,
            }}
          >
            Sign in to your account
          </text>
        </view>

        {/* Email Input */}
        <view
          style={{
            marginBottom: 20,
          }}
        >
          <text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: "#475569",
              marginBottom: 6,
            }}
          >
            Email address
          </text>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              height: 48,
              borderWidth: 1,
              borderColor: "#cbd5e1",
              borderRadius: 8,
              paddingLeft: 16,
              paddingRight: 16,
              fontSize: 16,
              backgroundColor: "#ffffff",
              width: "100%",
            }}
          />
        </view>

        {/* Password Input */}
        <view
          style={{
            marginBottom: 24,
          }}
        >
          <view
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 6,
            }}
          >
            <text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "#475569",
              }}
            >
              Password
            </text>
            <text
              style={{
                fontSize: 14,
                color: "#3b82f6",
                fontWeight: "500",
              }}
            >
              Forgot password?
            </text>
          </view>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              height: 48,
              borderWidth: 1,
              borderColor: "#cbd5e1",
              borderRadius: 8,
              paddingLeft: 16,
              paddingRight: 16,
              fontSize: 16,
              backgroundColor: "#ffffff",
              width: "100%",
            }}
          />
        </view>

        {/* Login Button */}
        <view
          bindtap={handleLogin}
          style={{
            backgroundColor: isLoading ? "#60a5fa" : "#3b82f6",
            borderRadius: 8,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 8,
            cursor: "pointer",
            opacity: !email || !password ? 0.7 : 1,
          }}
        >
          <text
            style={{
              color: "#ffffff",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </text>
        </view>

        {/* Sign Up Link */}
        <view
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 24,
          }}
        >
          <text
            style={{
              fontSize: 14,
              color: "#64748b",
            }}
          >
            Don't have an account?{" "}
          </text>
          <text
            style={{
              fontSize: 14,
              color: "#3b82f6",
              fontWeight: "500",
            }}
          >
            Sign up
          </text>
        </view>
      </view>
    </view>
  )
}
