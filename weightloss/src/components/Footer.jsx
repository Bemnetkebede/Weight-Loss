    import { Link } from 'react-router-dom';
    
    const Footer = () => {
    return (
        <footer  style={{ backgroundColor: '#738A6E' }} className="bg-footer  text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 className="text-xl font-bold mb-4">WeightWise</h3>
                <p className="text-gray-300">
                Your trusted partner for weight loss and healthy living.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                <li>
                    <Link to="/" className="text-gray-300 hover:text-white">
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="text-gray-300 hover:text-white">
                    About
                    </Link>
                </li>
                <li>
                    <Link to="/food-suggestions" className="text-gray-300 hover:text-white">
                    Food Suggestions
                    </Link>
                </li>
                <li>
                    <Link to="/exercise-suggestions" className="text-gray-300 hover:text-white">
                    Exercise Suggestions
                    </Link>
                </li>
                <li>
                    <Link to="/calories" className="text-gray-300 hover:text-white">
                    Calories
                    </Link>
                </li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="text-gray-300">
                Email: info@weightloss.com
                </p>
                <p className="text-gray-300">
                Phone: +2519 - 456-789
                </p>
            </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            {/* <p className="text-gray-300">
                &copy; {new Date().getFullYear()} WeightWise. All rights reserved.
            </p> */}
            </div>
        </div>
        </footer>
    );
    };

export default Footer;