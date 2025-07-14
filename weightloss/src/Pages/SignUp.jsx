"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { registerUser } from "../services/authServices"

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    bloodType: "",
    weight: "",
    height: "",
    goal: "weight loss",
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState("")

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

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

    if (!formData.name.trim()) newErrors.name = "Name is required"

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (!formData.age) {
      newErrors.age = "Age is required"
    } else if (isNaN(formData.age) || formData.age < 18 || formData.age > 100) {
      newErrors.age = "Age must be between 18 and 100"
    }

    if (!formData.gender) newErrors.gender = "Gender is required"
    if (!formData.bloodType) newErrors.bloodType = "Blood type is required"

    if (!formData.weight) {
      newErrors.weight = "Weight is required"
    } else if (isNaN(formData.weight) || formData.weight < 30 || formData.weight > 300) {
      newErrors.weight = "Weight must be between 30 and 300 kg"
    }

    if (!formData.height) {
      newErrors.height = "Height is required"
    } else if (isNaN(formData.height) || formData.height < 100 || formData.height > 250) {
      newErrors.height = "Height must be between 100 and 250 cm"
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
      // Create user data object for API
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        age: Number.parseInt(formData.age),
        gender: formData.gender,
        bloodType: formData.bloodType,
        weight: Number.parseFloat(formData.weight),
        height: Number.parseFloat(formData.height),
        goal: formData.goal,
      }

      const response = await registerUser(userData)
      console.log("Registration successful:", response)

      // Redirect to login page after successful registration
      navigate("/", { state: { message: "Registration successful! Please log in." } })
    } catch (error) {
      // More specific error handling
      if (error.message.includes("Email already exists")) {
        setErrors({
          ...errors,
          email: "This email is already registered. Please use a different email or login.",
        })
      } else {
        setApiError(error.message || "Registration failed. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f4f7f2] via-white to-[#e8ede5]">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0 hidden md:block">
              <div className="h-full w-48 bg-gradient-to-br from-[#738A6E] to-[#5e7158] flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h2 className="text-xl font-bold mb-2">Join WeightWise</h2>
                  <p className="text-sm opacity-80">Start your journey to a healthier you today</p>
                </div>
              </div>
            </div>
            <div className="p-8 w-full">
              <div className="uppercase tracking-wide text-sm text-[#738A6E] font-semibold mb-1">Create Account</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Sign Up</h1>

              {apiError && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">{apiError}</div>}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#738A6E] ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

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
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
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

                  {/* Age */}
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#738A6E] ${
                        errors.age ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age}</p>}
                  </div>

                  {/* Gender */}
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#738A6E] ${
                        errors.gender ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
                  </div>

                  {/* Blood Type */}
                  <div>
                    <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 mb-1">
                      Blood Type
                    </label>
                    <select
                      id="bloodType"
                      name="bloodType"
                      value={formData.bloodType}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#738A6E] ${
                        errors.bloodType ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select Blood Type</option>
                      {bloodTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.bloodType && <p className="mt-1 text-sm text-red-600">{errors.bloodType}</p>}
                  </div>

                  {/* Weight */}
                  <div>
                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#738A6E] ${
                        errors.weight ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.weight && <p className="mt-1 text-sm text-red-600">{errors.weight}</p>}
                  </div>

                  {/* Height */}
                  <div>
                    <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      id="height"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#738A6E] ${
                        errors.height ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.height && <p className="mt-1 text-sm text-red-600">{errors.height}</p>}
                  </div>

                  {/* Goal */}
                  <div className="md:col-span-2">
                    <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-1">
                      Goal
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#738A6E]"
                    >
                      <option value="weight loss">Weight Loss</option>
                      <option value="muscle gain">Muscle Gain</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="general health">General Health</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#738A6E] to-[#5e7158] text-white py-2 px-4 rounded-md hover:from-[#5e7158] hover:to-[#4a5a46] transition duration-300 disabled:opacity-70"
                  >
                    {loading ? "Creating Account..." : "Sign Up"}
                  </button>
                </div>

                <div className="text-center text-sm text-gray-600 mt-4">
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#738A6E] font-medium hover:underline">
                    Sign In
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

export default SignUp

