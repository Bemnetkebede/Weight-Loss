import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react"
import N2 from  '../assets/Images/n2.jpg'
const Home = () => {
return (
<>
<section className="py-10 px-6 md:px-16 lg:px-24">
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0 relative">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-[#d1dccb] rounded-full opacity-50 -translate-x-6 -translate-y-6"></div>
                <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-[#96aa8c] rounded-full opacity-60"></div>
                <div className="absolute bottom-1/3 left-2/3 w-12 h-12 bg-[#b9c9af] rounded-lg rotate-12 opacity-70"></div>

                <h3 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Your Journey to a Healthier You Starts Here
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                WeightWise helps you achieve your weight loss goals with personalized food suggestions, exercise
                recommendations, and calorie tracking.
                </p>
                <Link
                    to="/exercise"
                    className="bg-[#738A6E] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5e7158] transition duration-300 inline-flex items-center"
                >
                    Exercise
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                </div>

                <div className="md:w-1/2 relative">
                {/* Decorative elements */}
                <div className="absolute top-1/4 right-0 w-20 h-20 bg-[#d1dccb] rounded-lg rotate-12 opacity-70"></div>
                <div className="absolute bottom-0 right-1/4 w-16 h-16 bg-[#e8ede5] rounded-full opacity-60"></div>

                <img
                    src={N2}
                    alt="Woman eating healthy food"
                    className="mx-auto relative z-10"
                />
                </div>
            </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#f4f7f2]">
            <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose WeightWise</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive approach to weight loss combines nutrition, exercise, and tracking to help you achieve
                your goals.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                <div className="w-12 h-12 bg-[#e8ede5] rounded-lg flex items-center justify-center mb-4">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#738A6E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diet without pain</h3>
                <p className="text-gray-600">
                    Our meal plans are designed to be satisfying and delicious, making your weight loss journey enjoyable.
                </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                <div className="w-12 h-12 bg-[#e8ede5] rounded-lg flex items-center justify-center mb-4">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#738A6E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy to apply</h3>
                <p className="text-gray-600">
                    Simple, straightforward plans that fit into your busy lifestyle without complicated restrictions.
                </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                <div className="w-12 h-12 bg-[#e8ede5] rounded-lg flex items-center justify-center mb-4">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#738A6E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Realistic advice</h3>
                <p className="text-gray-600">
                    Practical guidance based on science that you can actually follow in real life situations.
                </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                <div className="w-12 h-12 bg-[#e8ede5] rounded-lg flex items-center justify-center mb-4">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#738A6E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Best nutrition</h3>
                <p className="text-gray-600">
                    Optimized meal plans that provide all the nutrients your body needs while supporting weight loss.
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 md:px-16 lg:px-24">
            <div className="container mx-auto bg-gradient-to-r from-[#738A6E] to-[#5e7158] rounded-2xl p-10 md:p-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to start your journey?</h2>
                <p className="text-white opacity-90">
                    Join thousands of people who have successfully achieved their weight loss goals with WeightWise.
                </p>
                </div>
                <div>
                <Link
                    to="/signup"
                    className="bg-white text-[#738A6E] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300 inline-block"
                >
                    Get Started
                </Link>
                </div>
            </div>
            </div>
        </section>
    </>
    );
    };

    export default Home;
