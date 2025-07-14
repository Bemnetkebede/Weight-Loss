// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

//     const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         // style={{ backgroundColor: '#738A6E' }}
//         <nav   className="text-black shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//                 <Link to="/" className="flex-shrink-0 font-bold text-xl">
//                 WeightWise
//                 </Link>
//             </div>
//             <div className="hidden md:block">
//                 <div className="ml-10 flex items-baseline space-x-4">
//                 <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">
//                     Home
//                 </Link>
//                 <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">
//                     About
//                 </Link>
//                 <Link to="/food-suggestions" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">
//                     Food Suggestions
//                 </Link>
//                 <Link to="/exercise-suggestions" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">
//                     Exercise Suggestions
//                 </Link>
//                 <Link to="/calories" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">
//                     Calories
//                 </Link>
//                 </div>
//             </div>
//             <div className="md:hidden">
//                 <button
//                 onClick={toggleMenu}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-700 focus:outline-none"
//                 >
//                 {isOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//             </div>
//             </div>
//         </div>

//         {/* Mobile menu */}
//         {isOpen && (
//             <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 <Link 
//                 to="/" 
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
//                 onClick={() => setIsOpen(false)}
//                 >
//                 Home
//                 </Link>
//                 <Link 
//                 to="/about" 
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
//                 onClick={() => setIsOpen(false)}
//                 >
//                 About
//                 </Link>
//                 <Link 
//                 to="/food-suggestions" 
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
//                 onClick={() => setIsOpen(false)}
//                 >
//                 Food Suggestions
//                 </Link>
//                 <Link 
//                 to="/exercise-suggestions" 
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
//                 onClick={() => setIsOpen(false)}
//                 >
//                 Exercise Suggestions
//                 </Link>
//                 <Link 
//                 to="/calories" 
//                 className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700"
//                 onClick={() => setIsOpen(false)}
//                 >
//                 Calories
//                 </Link>
//             </div>
//             </div>
//         )}
//         </nav>
//     );
//     };

// export default Navbar;
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import N from '../assets/Images/n.jpg'
import N2 from  '../assets/Images/n2.jpg'

const Navbar = () => {
return (
<div className=" bg-white">
    {/* Navigation */}
    <header className="py-4 px-6 md:px-16 lg:px-24">
    <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <span className="text-[#738A6E] font-bold text-3xl">W</span>
        <span className="font-semibold text-xl text-gray-800">eightWise</span>
        </div>

        <nav className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-800 font-medium">
            Home
        </Link>
        <Link to="/AboutUs" className="text-gray-600  hover:text-[black] transition duration-200">
            About Us
        </Link>
        <Link to="/exercise" className="text-gray-600 hover:text-[black] transition duration-200">
            Exersise
        </Link>
        <Link to="/food" className="text-gray-600 hover:text-[black] transition duration-200">
            Food
        </Link>
        <Link to="/calories" className="text-gray-600 hover:text-[black] transition duration-200">
            Calorie
        </Link>
        <Link to="/chart" className="text-gray-600 hover:text-[black] transition duration-200">
            Chart
        </Link>
        </nav>

        <Link
        to="/login"
        className="hidden md:block bg-[#738A6E] text-white px-6 py-2 rounded-full hover:bg-[#5e7158] transition duration-300"
        >
        Sign in
        </Link>

        {/* <button className="md:hidden text-gray-800">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </button> */}
    </div>
    </header>

</div>
)
}

export default Navbar
