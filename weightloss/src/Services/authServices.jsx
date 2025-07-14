const API_BASE_URL = "https://aiweightloss-production.up.railway.app/api"

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user_info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })

    // Check if the response is JSON
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      // Not JSON, get text instead for better error message
      const text = await response.text()
      console.error("Non-JSON response:", text)
      throw new Error("Server returned non-JSON response. Please try again later.")
    }

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || "Failed to register user")
    }

    return await response.json()
  } catch (error) {
    console.error("Error registering user:", error)
    throw error
  }
}

// Login user
export const loginUser = async (credentials) => {
  try {
    console.log("Sending login request to:", `${API_BASE_URL}/login`)
    console.log("With credentials:", JSON.stringify(credentials))

    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })

    // Debug response
    console.log("Response status:", response.status)
    console.log("Response headers:", Object.fromEntries([...response.headers.entries()]))

    // Check if the response is JSON
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      // Not JSON, get text instead for better error message
      const text = await response.text()
      console.error("Non-JSON response:", text)
      throw new Error("Server returned non-JSON response. Please try again later.")
    }

    // Safely try to parse JSON
    let data
    try {
      data = await response.json()
    } catch (parseError) {
      console.error("JSON parse error:", parseError)
      throw new Error("Failed to parse server response. Please try again later.")
    }

    if (!response.ok) {
      throw new Error(data.error || "Failed to login")
    }

    // Validate response data
    if (!data.user || !data.token) {
      console.error("Invalid response data:", data)
      throw new Error("Invalid response from server. Missing user data or token.")
    }

    // Store user data in localStorage for persistence
    localStorage.setItem("user", JSON.stringify(data.user))
    localStorage.setItem("token", data.token)

    return data
  } catch (error) {
    console.error("Error logging in:", error)
    throw error
  }
}

// Logout user
export const logoutUser = () => {
  localStorage.removeItem("user")
  localStorage.removeItem("token")
  window.location.href = "/"
}

// Check if user is logged in
export const isAuthenticated = () => {
  const user = localStorage.getItem("user")
  const token = localStorage.getItem("token")
  return !!user && !!token
}

// Get current user
export const getCurrentUser = () => {
  const user = localStorage.getItem("user")
  return user ? JSON.parse(user) : null
}

// Get user progress
export const getUserProgress = async (userId) => {
  try {
    const token = localStorage.getItem("token")
    const response = await fetch(`${API_BASE_URL}/user_info/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    // Check if the response is JSON
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      // Not JSON, get text instead for better error message
      const text = await response.text()
      console.error("Non-JSON response:", text)
      throw new Error("Server returned non-JSON response. Please try again later.")
    }

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || "Failed to fetch user progress")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching user progress:", error)
    throw error
  }
}
