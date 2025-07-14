"use client"

import { useState } from "react"
import MainLayout from "../layouts/MainLayout"
import { getMealSuggestions } from "../services/foodService"

const FoodSuggestions = () => {
  const [calorieLimit, setCalorieLimit] = useState("")
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)

  // Suggested calorie ranges that are likely to return results
  const suggestedCalories = [300, 400, 500, 600, 700, 800]

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate calorie limit before making the API call
    if (!calorieLimit || isNaN(Number(calorieLimit)) || Number(calorieLimit) <= 0) {
      setError("Please enter a valid calorie limit (must be a positive number)")
      return
    }

    setLoading(true)
    setError("")
    setShowSuggestions(false)

    try {
      // Convert to number to ensure proper type
      const response = await getMealSuggestions(Number(calorieLimit))

      // Check if meals array exists and has items
      if (response.meals && Array.isArray(response.meals) && response.meals.length > 0) {
        setMeals(response.meals)
      } else {
        // Handle empty meals array
        setMeals([])
        setError("No meal suggestions found for this calorie limit. Try a different value.")
        setShowSuggestions(true)
      }
    } catch (err) {
      console.error("Food suggestions error:", err)

      // Handle specific error cases
      if (err.message === "NO_MEALS_FOUND") {
        setError(`No meals found within ${calorieLimit} calories. Try a different calorie limit.`)
        setShowSuggestions(true)
      } else if (err.message === "Invalid calorie limit") {
        setError("Please enter a valid calorie limit (must be a positive number)")
      } else if (err.message.includes("no meals found")) {
        setError(`No meals found within ${calorieLimit} calories. Try a different calorie limit.`)
        setShowSuggestions(true)
      } else {
        setError(err.message || "Failed to fetch meal suggestions. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  const handleSuggestedCalorie = (calories) => {
    setCalorieLimit(calories.toString())
    // Optionally auto-submit the form with the suggested value
    // handleSubmit({ preventDefault: () => {} })
  }

  return (
    <>
      <div className="bg-[#738A6E]  py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Food Suggestions</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">Discover meal ideas based on your calorie needs</p>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Meal Suggestions</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="calorieLimit" className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum Calories per Meal
                </label>
                <input
                  type="number"
                  id="calorieLimit"
                  value={calorieLimit}
                  onChange={(e) => setCalorieLimit(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter calorie limit (e.g., 500)"
                  min="1"
                  max="2000"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Enter any positive number of calories (recommended range: 300-800)
                </p>
              </div>

              {error && <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">{error}</div>}

              {showSuggestions && (
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">Try these calorie limits:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedCalories.map((calories) => (
                      <button
                        key={calories}
                        type="button"
                        onClick={() => handleSuggestedCalorie(calories)}
                        className="px-3 py-1 bg-[#738A6E]  text-green-800 rounded-full text-sm hover:bg-green-200 transition-colors"
                      >
                        {calories} calories
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#738A6E] text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 disabled:bg-gray-400"
                disabled={loading}
              >
                {loading ? "Finding Meals..." : "Get Meal Suggestions"}
              </button>
            </form>
          </div>

          {loading && (
            <div className="mt-12 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-600"></div>
              <p className="mt-2 text-gray-600">Finding meal suggestions...</p>
            </div>
          )}

          {!loading && meals.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Suggested Meals</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {meals.map((meal, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{meal.name}</h3>
                      <p className="text-green-600 font-medium mb-4">{meal.calories} calories</p>

                      <h4 className="text-sm font-medium text-gray-700 mb-2">Ingredients:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {meal.ingredients && meal.ingredients.map ? (
                          meal.ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                        ) : (
                          <li>Ingredients information not available</li>
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!loading && meals.length === 0 && !error && calorieLimit && (
            <div className="mt-12 text-center">
              <p className="text-gray-600">No meal suggestions found. Try a different calorie limit.</p>
            </div>
          )}
        </div>
      </div>

      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tips for Healthy Eating</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these guidelines to make the most of your meal suggestions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Portion Control</h3>
              <p className="text-gray-600">
                Even healthy foods can contribute to weight gain if consumed in large quantities. Pay attention to
                portion sizes and use measuring tools if needed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Balanced Meals</h3>
              <p className="text-gray-600">
                Aim to include protein, complex carbohydrates, and healthy fats in each meal. This combination helps
                keep you full and provides sustained energy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hydration</h3>
              <p className="text-gray-600">
                Drink plenty of water throughout the day. Sometimes thirst can be mistaken for hunger, leading to
                unnecessary calorie consumption.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mindful Eating</h3>
              <p className="text-gray-600">
                Eat slowly and without distractions. This helps you recognize when you're full and enhances your
                enjoyment of meals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FoodSuggestions
