import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useSelector } from "react-redux";
export default function Header() {
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <header className="bg-cream text-gray-500 border-b-2 border-red-600 px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-orange-100 border-2 border-orange-400 rounded-full flex items-center justify-center">
          <Link to='/'>
            <img
            src="https://img.freepik.com/premium-vector/vintage-spices-logo_872660-7.jpg?semt=ais_hybrid&w=740" // 🍽️ icon from flaticon (replace with your logo if needed)
            alt="SpiceTalks Logo"
            className="w-full h-full object-cover rounded-full"
          />
          </Link>
        </div>
        <h1 className="text-xl font-semibold">SpiceTalks</h1>
      </div>

      {/* Navigation */}
      <nav className="flex gap-8 text-lg font-medium">
        <li className='list-none'>Online Status : {!onlineStatus ? '🔴' : '🟢' }</li>
        <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link>
        <Link to="/contact" className="hover:text-red-500 transition-colors">Contact Us</Link>
        <Link to="/grocery" className="hover:text-red -500 transition-colors">Grocery</Link>
        <Link to="/cart" className="hover:text-red -500 transition-colors">Cart ({cartItems.length} items)</Link>
      </nav>
    </header>
  );
}
