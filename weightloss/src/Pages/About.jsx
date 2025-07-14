// import MainLayout from "../layouts/MainLayout"

// const About = () => {
// return (
// <>
//     <div className="bg-green-600 py-16">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h1 className="text-4xl font-bold text-white mb-4">About WeightWise</h1>
//         <p className="text-xl text-white max-w-3xl mx-auto">
//         Your trusted partner for weight loss and healthy living
//         </p>
//     </div>
//     </div>

//     <div className="py-16 bg-white">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         <div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
//             <p className="text-lg text-gray-600 mb-6">
//             At WeightWise, our mission is to empower individuals on their weight loss journey by providing
//             personalized food suggestions, exercise recommendations, and calorie tracking tools.
//             </p>
//             <p className="text-lg text-gray-600">
//             We believe that sustainable weight loss is achieved through a balanced approach to nutrition and
//             physical activity, tailored to each person's unique needs and goals.
//             </p>
//         </div>
//         <div className="rounded-lg overflow-hidden shadow-lg">
//             <img src="/placeholder.svg?height=400&width=600" alt="People exercising" className="w-full h-auto" />
//         </div>
//         </div>
//     </div>
//     </div>

//     <div className="py-16 bg-gray-100">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How We Help You</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">Food Suggestions</h3>
//             <p className="text-gray-600">
//             We provide meal suggestions based on your calorie needs, helping you make healthier food choices without
//             sacrificing taste or satisfaction.
//             </p>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise Recommendations</h3>
//             <p className="text-gray-600">
//             Our personalized exercise recommendations are designed to match your fitness level and weight loss
//             goals, making physical activity more effective and enjoyable.
//             </p>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">Calorie Tracking</h3>
//             <p className="text-gray-600">
//             Our calorie lookup tool helps you understand the nutritional content of different foods, enabling you to
//             make informed decisions about your diet.
//             </p>
//         </div>
//         </div>
//     </div>
//     </div>

//     <div className="py-16 bg-white">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach to Weight Loss</h2>
//         <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
//         We believe in a holistic, sustainable approach to weight loss that focuses on creating healthy habits rather
//         than quick fixes.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-left">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">Balanced Nutrition</h3>
//             <p className="text-gray-600">
//             We emphasize the importance of a balanced diet that includes all food groups in appropriate portions.
//             Our food suggestions are designed to provide adequate nutrients while maintaining a calorie deficit for
//             weight loss.
//             </p>
//         </div>

//         <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-left">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">Regular Physical Activity</h3>
//             <p className="text-gray-600">
//             Our exercise recommendations focus on finding activities that you enjoy and can maintain long-term. We
//             believe that consistency is more important than intensity when it comes to physical activity for weight
//             loss.
//             </p>
//         </div>

//         <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-left">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">Mindful Eating</h3>
//             <p className="text-gray-600">
//             We encourage mindful eating practices that help you develop a healthier relationship with food. This
//             includes paying attention to hunger and fullness cues, eating slowly, and enjoying your meals.
//             </p>
//         </div>

//         <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-left">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable Habits</h3>
//             <p className="text-gray-600">
//             Our ultimate goal is to help you develop sustainable habits that you can maintain for life. We focus on
//             gradual changes that lead to lasting results, rather than drastic measures that are difficult to
//             maintain.
//             </p>
//         </div>
//         </div>
//     </div>
//     </div>
// </>
// )
// }

// export default About
import { Award, Heart, Leaf, Clock, BarChart3, Utensils, Dumbbell } from "lucide-react"
import MainLayout from "../layouts/MainLayout"
import B from '../assets/Images/b.jpg'

const About = () => {
  return (
    <>
      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-r from-[#738A6E] to-[#5e7158] py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-5 rounded-full"></div>
          <div className="absolute top-20 left-10 w-40 h-40 bg-white opacity-5 rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 bg-white opacity-5 rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About WeightWise</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your trusted partner for weight loss and healthy living
          </p>
        </div>
      </div>

      {/* Mission Section with Improved Layout */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#e8ede5] text-[#5e7158] mb-6">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Empowering Your Weight Loss Journey</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At WeightWise, our mission is to empower individuals on their weight loss journey by providing
                personalized food suggestions, exercise recommendations, and calorie tracking tools.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that sustainable weight loss is achieved through a balanced approach to nutrition and
                physical activity, tailored to each person's unique needs and goals.
              </p>
              <div className="flex items-center space-x-2 text-[#738A6E]">
                <Award className="h-5 w-5" />
                <span className="font-medium">Trusted by thousands of users worldwide</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-[#e8ede5] rounded-lg transform rotate-3"></div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#738A6E] rounded-lg transform -rotate-3"></div>
              <img
                src={B}
                alt="People exercising"
                className="relative z-10 w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-[#f4f7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-[#738A6E] mb-2">5k+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-[#738A6E] mb-2">92%</p>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-[#738A6E] mb-2">15k+</p>
              <p className="text-gray-600">Meal Plans</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-[#738A6E] mb-2">8+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* How We Help You Section with Enhanced Cards */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#e8ede5] text-[#5e7158] mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How We Help You</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive tools and guidance to support your weight loss journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e8ede5] rounded-bl-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="w-14 h-14 bg-[#e8ede5] rounded-lg flex items-center justify-center mb-6">
                <Utensils className="h-7 w-7 text-[#738A6E]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Food Suggestions</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide meal suggestions based on your calorie needs, helping you make healthier food choices without
                sacrificing taste or satisfaction.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#e8ede5] flex items-center justify-center mr-2">
                      <div className="w-2 h-2 rounded-full bg-[#738A6E]"></div>
                    </div>
                    Personalized meal plans
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#e8ede5] flex items-center justify-center mr-2">
                      <div className="w-2 h-2 rounded-full bg-[#738A6E]"></div>
                    </div>
                    Calorie-controlled recipes
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e8ede5] rounded-bl-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="w-14 h-14 bg-[#e8ede5] rounded-lg flex items-center justify-center mb-6">
                <Dumbbell className="h-7 w-7 text-[#738A6E]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercise Recommendations</h3>
              <p className="text-gray-600 leading-relaxed">
                Our personalized exercise recommendations are designed to match your fitness level and weight loss
                goals, making physical activity more effective and enjoyable.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#e8ede5] flex items-center justify-center mr-2">
                      <div className="w-2 h-2 rounded-full bg-[#738A6E]"></div>
                    </div>
                    Customized workout plans
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#e8ede5] flex items-center justify-center mr-2">
                      <div className="w-2 h-2 rounded-full bg-[#738A6E]"></div>
                    </div>
                    Activity level tracking
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e8ede5] rounded-bl-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="w-14 h-14 bg-[#e8ede5] rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-7 w-7 text-[#738A6E]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Calorie Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Our calorie lookup tool helps you understand the nutritional content of different foods, enabling you to
                make informed decisions about your diet.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#e8ede5] flex items-center justify-center mr-2">
                      <div className="w-2 h-2 rounded-full bg-[#738A6E]"></div>
                    </div>
                    Detailed nutritional info
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#e8ede5] flex items-center justify-center mr-2">
                      <div className="w-2 h-2 rounded-full bg-[#738A6E]"></div>
                    </div>
                    Progress monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section with Visual Improvements */}
      <div className="py-20 bg-[#f4f7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-[#5e7158] mb-4">
              Our Philosophy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Approach to Weight Loss</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in a holistic, sustainable approach to weight loss that focuses on creating healthy habits
              rather than quick fixes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex">
              <div className="mr-6">
                <div className="w-12 h-12 bg-[#e8ede5] rounded-full flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-[#738A6E]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Balanced Nutrition</h3>
                <p className="text-gray-600 leading-relaxed">
                  We emphasize the importance of a balanced diet that includes all food groups in appropriate portions.
                  Our food suggestions are designed to provide adequate nutrients while maintaining a calorie deficit
                  for weight loss.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex">
              <div className="mr-6">
                <div className="w-12 h-12 bg-[#e8ede5] rounded-full flex items-center justify-center">
                  <Dumbbell className="h-6 w-6 text-[#738A6E]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Physical Activity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our exercise recommendations focus on finding activities that you enjoy and can maintain long-term. We
                  believe that consistency is more important than intensity when it comes to physical activity for
                  weight loss.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex">
              <div className="mr-6">
                <div className="w-12 h-12 bg-[#e8ede5] rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-[#738A6E]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mindful Eating</h3>
                <p className="text-gray-600 leading-relaxed">
                  We encourage mindful eating practices that help you develop a healthier relationship with food. This
                  includes paying attention to hunger and fullness cues, eating slowly, and enjoying your meals.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex">
              <div className="mr-6">
                <div className="w-12 h-12 bg-[#e8ede5] rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-[#738A6E]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Habits</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our ultimate goal is to help you develop sustainable habits that you can maintain for life. We focus
                  on gradual changes that lead to lasting results, rather than drastic measures that are difficult to
                  maintain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-[#f4f7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-[#5e7158] mb-4">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real stories from real people who have transformed their lives with WeightWise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.5 21H4.5C4.5 14.1 10.1 8.5 17 8.5V11.5C11.8 11.5 7.5 15.8 7.5 21H11.5V30.5H2V21H11.5ZM30.5 21H23.5C23.5 14.1 29.1 8.5 36 8.5V11.5C30.8 11.5 26.5 15.8 26.5 21H30.5V30.5H21V21H30.5Z"
                    fill="#E8EDE5"
                  />
                </svg>
              </div>
              <div className="mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "WeightWise completely changed my approach to weight loss. The personalized meal suggestions and
                exercise plans made it easy to stay on track. I've lost 30 pounds in 6 months and feel better than
                ever!"
              </p>
              <div className="flex items-center">
                <img
                  src="/placeholder.svg?height=50&width=50"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Jennifer K.</h4>
                  <p className="text-sm text-gray-500">Lost 30 pounds</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.5 21H4.5C4.5 14.1 10.1 8.5 17 8.5V11.5C11.8 11.5 7.5 15.8 7.5 21H11.5V30.5H2V21H11.5ZM30.5 21H23.5C23.5 14.1 29.1 8.5 36 8.5V11.5C30.8 11.5 26.5 15.8 26.5 21H30.5V30.5H21V21H30.5Z"
                    fill="#E8EDE5"
                  />
                </svg>
              </div>
              <div className="mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "As someone who has tried countless diets, WeightWise is the only program that has given me sustainable
                results. The calorie tracking tool is incredibly helpful, and the exercise recommendations are realistic
                for my busy schedule."
              </p>
              <div className="flex items-center">
                <img
                  src="/placeholder.svg?height=50&width=50"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Robert M.</h4>
                  <p className="text-sm text-gray-500">Lost 45 pounds</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.5 21H4.5C4.5 14.1 10.1 8.5 17 8.5V11.5C11.8 11.5 7.5 15.8 7.5 21H11.5V30.5H2V21H11.5ZM30.5 21H23.5C23.5 14.1 29.1 8.5 36 8.5V11.5C30.8 11.5 26.5 15.8 26.5 21H30.5V30.5H21V21H30.5Z"
                    fill="#E8EDE5"
                  />
                </svg>
              </div>
              <div className="mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "I appreciate that WeightWise focuses on creating healthy habits rather than quick fixes. The mindful
                eating tips have transformed my relationship with food, and I've maintained my weight loss for over a
                year now."
              </p>
              <div className="flex items-center">
                <img
                  src="/placeholder.svg?height=50&width=50"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Samantha T.</h4>
                  <p className="text-sm text-gray-500">Lost 25 pounds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#738A6E] to-[#5e7158] rounded-2xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your journey?</h2>
                <p className="text-white text-lg opacity-90 max-w-2xl">
                  Join thousands of people who have successfully achieved their weight loss goals with WeightWise. Your
                  healthier life starts today.
                </p>
              </div>
              <div>
                <a
                  href="/signup"
                  className="inline-block bg-white text-[#738A6E] px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
                >
                  Sign Up Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
