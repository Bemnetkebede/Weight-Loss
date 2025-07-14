
import { useState } from "react";
import { getCalorieInfo } from "../Services/foodService"

const Calories = () => {
const [food, setFood] = useState("")
const [calorieInfo, setCalorieInfo] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState("")

// const handleSubmit = async (e) => {
// e.preventDefault()

// if (!food.trim()) {
//     setError("Please enter a food name")
//     return
// }

//     setLoading(true)
//     setError("")

//     try {
//       const response = await getCalorieInfo(food.trim())
//       setCalorieInfo(response || null)
//     } catch (err) {
//       setError(err.message || "Failed to fetch calorie information")
//     } finally {
//       setLoading(false)
//     }
//   }
const handleSubmit = async (e) => {
    e.preventDefault();
    if (!food.trim()) {
      setError("Please enter a food name");
      return;
    }
  
    setLoading(true);
    setError("");
    setCalorieInfo(null);
  
    try {
      const data = await getCalorieInfo(food.trim());
      console.log("Processed Data:", data);
  
      if (!data.items || data.items.length === 0) {
        throw new Error(`No nutritional data available for "${food}"`);
      }
  
      setCalorieInfo(data.items[0]); // ✅ only the first item
    } catch (err) {
      setError(err.message.includes("not found") 
        ? `No data found for "${food}". Try common foods like "banana" or "chicken".`
        : "Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <div className="bg-[#738A6E]  py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Calorie Lookup</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">Find the nutritional information for any food</p>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Calorie Information</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="food" className="block text-sm font-medium text-gray-700 mb-2">
                  Food Name
                </label>
                <input
                  type="text"
                  id="food"
                  value={food}
                  onChange={(e) => setFood(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter food name (e.g., apple)"
                />
              </div>

              {error && <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">{error}</div>}

              <button
                type="submit"
                className="w-full bg-[#738A6E]  text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 disabled:bg-gray-400"
                disabled={loading}
              >
                {loading ? "Looking Up..." : "Get Calorie Information"}
              </button>
            </form>
          </div>

          {loading && (
            <div className="mt-12 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-600"></div>
              <p className="mt-2 text-gray-600">Looking up calorie information...</p>
            </div>
          )}

          {!loading && calorieInfo && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Nutritional Information for {calorieInfo.name}
              </h2>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h3>

                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Calories:</span>
                          <span className="font-medium">{calorieInfo.calories}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Protein:</span>
                          <span className="font-medium">{calorieInfo.protein_g}g</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Fat:</span>
                          <span className="font-medium">{calorieInfo.fat_total_g}g</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sugar:</span>
                          <span className="font-medium">{calorieInfo.sugar_g}g</span>
                        </div>
  
                      </div>
                    </div>

                    {/* <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Macronutrients</h3>

                      <div className="space-y-3">
                        
                        {/* <div className="flex justify-between">
                          <span className="text-gray-600">Saturated Fat:</span>
                          <span className="font-medium">{calorieInfo.fat_saturated_g}g</span>
                        </div> */}
                        {/* <div className="flex justify-between">
                          <span className="text-gray-600">Total Carbohydrates:</span>
                          <span className="font-medium">{calorieInfo.carbohydrates_total_g}g</span>
                        </div> */}
                        {/* <div className="flex justify-between">
                          <span className="text-gray-600">Fiber:</span>
                          <span className="font-medium">{calorieInfo.fiber_g}g</span>
                        </div> */}
                  </div>
                  {/* <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Micronutrients</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sodium:</span>
                        <span className="font-medium">{calorieInfo.sodium_mg}mg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Potassium:</span>
                        <span className="font-medium">{calorieInfo.potassium_mg}mg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cholesterol:</span>
                        <span className="font-medium">{calorieInfo.cholesterol_mg}mg</span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          )}

          {!loading && !calorieInfo && !error && food && (
            <div className="mt-12 text-center">
              <p className="text-gray-600">No calorie information found for "{food}". Try a different food name.</p>
            </div>
          )}
        </div>
      </div>

      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Nutrition Labels</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn how to interpret nutritional information to make healthier choices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Calories</h3>
              <p className="text-gray-600">
                Calories measure the energy provided by food. For weight loss, you need to consume fewer calories than
                you burn. Most adults need between 1,600 and 2,400 calories per day, depending on activity level.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Macronutrients</h3>
              <p className="text-gray-600">
                Proteins, fats, and carbohydrates are macronutrients that provide energy and support bodily functions. A
                balanced diet typically includes all three in appropriate proportions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Serving Sizes</h3>
              <p className="text-gray-600">
                Pay attention to serving sizes when tracking calories. Nutritional information is typically provided per
                serving, not per container or package.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hidden Calories</h3>
              <p className="text-gray-600">
                Be aware of hidden calories in beverages, sauces, and dressings. These can add up quickly and contribute
                significantly to your daily calorie intake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calories
