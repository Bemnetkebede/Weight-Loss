// import { useState } from "react";
// import { getExerciseRecommendations } from "../Services/getExerciseRecommendations";

// const ExerciseSuggestions = () => {
//   const [goal, setGoal] = useState("");
//   const [recommendation, setRecommendation] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!goal) {
//       setError("Please select a goal");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const response = await getExerciseRecommendations(goal);
//       console.log('Received response:', response);
      
//       // Check if response is a string (like the one you're getting)
//       if (typeof response === 'string' || Array.isArray(response)) {
//         // If it's the character array response you showed, join it into a string
//         const recommendationText = Array.isArray(response) ? response.join('') : response;
        
//         // Create a structured response object that matches what your component expects
//         setRecommendation({
//           bmi: "N/A",  // You might want to calculate this separately
//           ideal_weight: "N/A",  // Same as above
//           message: recommendationText,
//           exercises: []  // Empty array since no exercises were provided
//         });
//       } else if (response.recommendation) {
//         // If the response is already structured as expected
//         setRecommendation(response.recommendation);
//       } else {
//         setError("No exercise recommendations found. Try a different goal.");
//       }
//     } catch (err) {
//       setError(err.message || "Failed to fetch exercise recommendations");
//     } finally {
//       setLoading(false);
//     }
//   }

// return (
// <>
//     <div className="bg-[#738A6E] py-16">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h1 className="text-4xl font-bold text-white mb-4">Exercise Recommendations</h1>
//         <p className="text-xl text-white max-w-3xl mx-auto">Get personalized exercise plans based on your goals</p>
//     </div>
//     </div>

//     <div className="py-12 bg-white">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Exercise Recommendations</h2>

//         const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!goal) {
//     setError("Please select a goal");
//     return;
//   }

//   setLoading(true);
//   setError("");
//   setRecommendation(null); // Reset previous result

//   try {
//     const response = await getExerciseRecommendations(goal);
//     console.log("Raw API response:", response);

//     if (typeof response === "string" || Array.isArray(response)) {
//       const recommendationText = Array.isArray(response)
//         ? response.join("")
//         : response;

//       setRecommendation({
//         bmi: "N/A",
//         ideal_weight: "N/A",
//         message: recommendationText,
//         exercises: [], // No exercises provided
//       });
//     } else if (response?.recommendation) {
//       setRecommendation(response.recommendation);
//     } else {
//       // Edge case: object but missing expected structure
//       const fallbackMessage = JSON.stringify(response);
//       setRecommendation({
//         bmi: "N/A",
//         ideal_weight: "N/A",
//         message: fallbackMessage,
//         exercises: [],
//       });
//     }
//   } catch (err) {
//     setError(err.message || "Failed to fetch exercise recommendations");
//   } finally {
//     setLoading(false);
//   }
// };

//         </div>

//         {loading && (
//         <div className="mt-12 text-center">
//             <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-600"></div>
//             <p className="mt-2 text-gray-600">Finding exercise recommendations...</p>
//         </div>
//         )}

//         {!loading && recommendation && (
//         <div className="mt-12">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Exercise Plan</h2>

//             <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
//             <div className="p-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                     <h3 className="text-lg font-medium text-gray-700 mb-2">BMI</h3>
//                     <p className="text-2xl font-bold text-gray-900">{recommendation.bmi}</p>
//                 </div>
//                 <div>
//                     <h3 className="text-lg font-medium text-gray-700 mb-2">Ideal Weight</h3>
//                     <p className="text-2xl font-bold text-gray-900">{recommendation.ideal_weight} kg</p>
//                 </div>
//                 </div>

//                 <div className="mb-6">
//                 <h3 className="text-lg font-medium text-gray-700 mb-2">Personalized Message</h3>
//                 <p className="text-gray-600">{recommendation.message}</p>
//                 </div>
//             </div>
//             </div>

//             <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Exercises</h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {recommendation.exercises.map((exercise, index) => (
//                 <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <div className="p-6">
//                     <h4 className="text-lg font-semibold text-gray-900 mb-2">{exercise.name}</h4>
//                     <div className="flex justify-between mb-2">
//                     <span className="text-gray-600">Calories:</span>
//                     <span className="font-medium">{exercise.calories}</span>
//                     </div>
//                     <div className="flex justify-between mb-4">
//                     <span className="text-gray-600">Duration:</span>
//                     <span className="font-medium">{exercise.duration} minutes</span>
//                     </div>
//                     <p className="text-gray-600 text-sm">{exercise.advice}</p>
//                 </div>
//                 </div>
//             ))}
//             </div>
//         </div>
//         )}

//         {!loading && !recommendation && !error && goal && (
//         <div className="mt-12 text-center">
//             <p className="text-gray-600">No exercise recommendations found. Try a different goal.</p>
//         </div>
//         )}
//     </div>
//     </div>

//     <div className="py-12 bg-gray-100">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-4">Exercise Tips</h2>
//         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Follow these guidelines to make your workouts more effective
//         </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">Start Slowly</h3>
//             <p className="text-gray-600">
//             If you're new to exercise, start with shorter, less intense workouts and gradually increase duration and
//             intensity as your fitness improves.
//             </p>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">Consistency is Key</h3>
//             <p className="text-gray-600">
//             Regular exercise is more important than occasional intense workouts. Aim for at least 150 minutes of
//             moderate activity per week.
//             </p>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">Mix It Up</h3>
//             <p className="text-gray-600">
//             Incorporate a variety of exercises to work different muscle groups and prevent boredom. Include cardio,
//             strength training, and flexibility exercises.
//             </p>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">Listen to Your Body</h3>
//             <p className="text-gray-600">
//             Pay attention to how your body feels during and after exercise. Some muscle soreness is normal, but pain
//             is a sign to stop and rest.
//             </p>
//         </div>
//         </div>
//     </div>
//     </div>
// </>
// )
// }

// export default ExerciseSuggestions
import { useState } from "react";
import { getExerciseRecommendations } from "../../services/getExerciseRecommendations";

const ExerciseSuggestions = () => {
  const [goal, setGoal] = useState("");
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!goal) {
      setError("Please select a goal");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await getExerciseRecommendations(goal);
      console.log("Received response:", response);

      if (typeof response === "string") {
        setRecommendation({
          bmi: "N/A",
          ideal_weight: "N/A",
          message: response,
          exercises: [],
        });
      } else if (Array.isArray(response)) {
        setRecommendation({
          bmi: "N/A",
          ideal_weight: "N/A",
          message: response.join(""),
          exercises: [],
        });
      } else if (typeof response === "object" && response !== null) {
        if (response.recommendation) {
          setRecommendation(response.recommendation);
        } else if (
          Object.keys(response).every((key) => !isNaN(Number(key)))
        ) {
          const sortedKeys = Object.keys(response).sort((a, b) => a - b);
          const joined = sortedKeys.map((k) => response[k]).join("");
          setRecommendation({
            bmi: "N/A",
            ideal_weight: "N/A",
            message: joined,
            exercises: [],
          });
        } else {
          setRecommendation({
            bmi: "N/A",
            ideal_weight: "N/A",
            message: JSON.stringify(response),
            exercises: [],
          });
        }
      } else {
        setError("No exercise recommendations found. Try a different goal.");
      }
    } catch (err) {
      setError(err.message || "Failed to fetch exercise recommendations");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-[#738A6E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Exercise Recommendations
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Get personalized exercise plans based on your goals
          </p>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Find Exercise Recommendations
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="goal"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Fitness Goal
                </label>
                <select
                  id="goal"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select a goal</option>
                  <option value="weight loss">Weight Loss</option>
                  <option value="muscle gain">Muscle Gain</option>
                  <option value="endurance">Endurance</option>
                </select>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#738A6E] text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 disabled:bg-gray-400"
                disabled={loading}
              >
                {loading
                  ? "Finding Exercises..."
                  : "Get Exercise Recommendations"}
              </button>
            </form>
          </div>

          {loading && (
            <div className="mt-12 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-600"></div>
              <p className="mt-2 text-gray-600">
                Finding exercise recommendations...
              </p>
            </div>
          )}

          {!loading && recommendation && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Your Exercise Plan
              </h2>

              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* <div>
                      <h3 className="text-lg font-medium text-gray-700 mb-2">
                        BMI
                      </h3>
                      <p className="text-2xl font-bold text-gray-900">
                        {recommendation.bmi}
                      </p>
                    </div> */}
                    {/* <div>
                      <h3 className="text-lg font-medium text-gray-700 mb-2">
                        Ideal Weight
                      </h3>
                      <p className="text-2xl font-bold text-gray-900">
                        {recommendation.ideal_weight} kg
                      </p>
                    </div> */}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-700 mb-2">
                      Hello Dear
                    </h3>
                    <p className="text-gray-600">
                    {recommendation.message
    .replace(/[^a-zA-Z ]/g, "") 
    .split(" ")                 
    .filter(Boolean)          
    .slice(0, 100)             
    .join(" ")}               
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Recommended Exercises
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendation.exercises.map((exercise, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {exercise.name}
                      </h4>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Calories:</span>
                        <span className="font-medium">{exercise.calories}</span>
                      </div>
                      <div className="flex justify-between mb-4">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">
                          {exercise.duration} minutes
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {exercise.advice}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!loading && !recommendation && !error && goal && (
            <div className="mt-12 text-center">
              <p className="text-gray-600">
                No exercise recommendations found. Try a different goal.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Exercise Tips
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these guidelines to make your workouts more effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Start Slowly
              </h3>
              <p className="text-gray-600">
                If you're new to exercise, start with shorter, less intense
                workouts and gradually increase duration and intensity as your
                fitness improves.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Consistency is Key
              </h3>
              <p className="text-gray-600">
                Regular exercise is more important than occasional intense
                workouts. Aim for at least 150 minutes of moderate activity per
                week.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mix It Up
              </h3>
              <p className="text-gray-600">
                Incorporate a variety of exercises to work different muscle
                groups and prevent boredom. Include cardio, strength training,
                and flexibility exercises.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Listen to Your Body
              </h3>
              <p className="text-gray-600">
                Pay attention to how your body feels during and after exercise.
                Some muscle soreness is normal, but pain is a sign to stop and
                rest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseSuggestions;


