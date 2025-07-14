const API_BASE_URL = "https://aiweightloss-production.up.railway.app/api"

export const getExerciseRecommendations = async (goal) => {
  try {
    const response = await fetch(`${API_BASE_URL}/exercise-recommendations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ goal }),
    });

    if (!response.ok) throw new Error("Request failed");

    const data = await response.json();
    return {
      ...data.recommendation,
      exercises: data.recommendation?.exercises || []
    };
  } catch (error) {
    console.error("API Error:", error);
    return {
      exercises: [],
      message: error.message
    };
  }
};