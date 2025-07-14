const API_BASE_URL = "https://aiweightloss-production.up.railway.app/api";

export const getCalorieInfo = async (food) => {
  try {
    console.log("Fetching data for:", food); // Debug log
    
    const response = await fetch(`${API_BASE_URL}/calorie_info?food=${encodeURIComponent(food)}`, {
      headers: {
        'Accept': 'application/json',
      }
    });

    console.log("API Response Status:", response.status); // Debug log

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response:", errorText);
      throw new Error(errorText || "Failed to fetch calorie information");
    }

    const data = await response.json();
    console.log("API Data Received:", data); // Debug log
    return data;
    
  } catch (error) {
    console.error("Network Error:", error);
    throw error;
  }
};


// export const getMealSuggestions = async (calorieLimit) => {
//   try {
//     // Validate calorie limit before making the API call
//     if (!calorieLimit || isNaN(Number(calorieLimit)) || Number(calorieLimit) <= 0) {
//       throw new Error("Invalid calorie limit")
//     }

//     // Convert to number and ensure it's a positive integer
//     const calories = Math.floor(Math.abs(Number(calorieLimit)))

//     // Log for debugging
//     console.log("Sending calorie limit to API:", calories)

//     const response = await fetch(`${API_BASE_URL}/meal_suggestion?calorie_limit=${calories}`)

//     // Handle the specific "no meals found" error
//     if (response.status === 500) {
//       const errorData = await response.json()
//       if (errorData.error && errorData.error.includes("no meals found")) {
//         // Create a custom error for this specific case
//         throw new Error("NO_MEALS_FOUND")
//       }
//       throw new Error(errorData.error || "Failed to fetch meal suggestions")
//     }

//     if (!response.ok) {
//       const errorData = await response.json()
//       throw new Error(errorData.error || "Failed to fetch meal suggestions")
//     }

//     return await response.json()
//   } catch (error) {
//     console.error("Error fetching meal suggestions:", error)
//     throw error
//   }
// }

export const getMealSuggestions = async (calorieLimit) => {
  try {
    // Validate input
    const calories = Math.floor(Number(calorieLimit));
    if (isNaN(calories) || calories <= 0) {
      throw new Error("Please enter a valid positive number");
    }

    // Make API request
    const response = await fetch(`${API_BASE_URL}/meal_suggestion?calorie_limit=${calories}`, {
      headers: {
        'Accept': 'application/json',
      }
    });

    // Handle response
    const data = await response.json();
    
    if (!response.ok) {
      if (data.error?.includes("no meals found")) {
        throw new Error("NO_MEALS_FOUND");
      }
      throw new Error(data.error || "Failed to fetch suggestions");
    }

    // Normalize response format
    return {
      meals: Array.isArray(data) ? data : data.meals || []
    };

  } catch (error) {
    console.error("API Error:", {
      message: error.message,
      stack: error.stack
    });
    throw error;
  }
};

export const addUserInfo = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user_info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || "Failed to save user information")
    }

    return await response.json()
  } catch (error) {
    console.error("Error saving user info:", error)
    throw error
  }
}

export const getUserProgress = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user_info/${userId}`)

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
