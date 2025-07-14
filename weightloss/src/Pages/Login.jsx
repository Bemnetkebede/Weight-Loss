"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "../services/authServices"

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  // Check for success message from registration
  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message)
      // Clear the message after 5 seconds
      const timer = setTimeout(() => {
        setSuccessMessage("")
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [location.state])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)
    setApiError("")

    try {
      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      })

      console.log("Login successful:", response)

      // Redirect to home page after successful login
      navigate("/")
    } catch (error) {
      // More specific error handling
      if (error.message.includes("Invalid email or password")) {
        setApiError("Invalid email or password. Please check your credentials and try again.")
      } else if (error.message.includes("session has expired")) {
        setApiError("Your session has expired. Please log in again.")
      } else {
        setApiError(error.message || "Login failed. Please try again later.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f4f7f2] via-white to-[#e8ede5]">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-lg">
          <div className="md:flex">
            <div className="md:shrink-0 hidden md:block">
              <div className="h-full w-48 bg-gradient-to-br from-[#738A6E] to-[#5e7158] flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h2 className="text-xl font-bold mb-2">Welcome Back</h2>
                  <p className="text-sm opacity-80">Continue your health journey</p>
                </div>
              </div>
            </div>
            <div className="p-8 w-full">
              <div className="uppercase tracking-wide text-sm text-[#738A6E] font-semibold mb-1">Account Access</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Sign In</h1>

              {successMessage && (
                <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md text-sm">{successMessage}</div>
              )}

              {apiError && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">{apiError}</div>}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#738A6E] ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                {/* Password */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <a href="#" className="text-xs text-[#738A6E] hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#738A6E] ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                </div>

                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#738A6E] focus:ring-[#738A6E] border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#738A6E] to-[#5e7158] text-white py-2 px-4 rounded-md hover:from-[#5e7158] hover:to-[#4a5a46] transition duration-300 disabled:opacity-70"
                  >
                    {loading ? "Signing In..." : "Sign In"}
                  </button>
                </div>

                <div className="text-center text-sm text-gray-600 mt-4">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-[#738A6E] font-medium hover:underline">
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
