import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../utils/slices/userSlice";

export default function Header() {
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const username = localStorage.getItem('spicetalksuser');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="bg-cream text-gray-500 border-b-2 border-red-600 px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-orange-100 border-2 border-orange-400 rounded-full flex items-center justify-center">
          <Link to='/'>
            <img
              src="https://img.freepik.com/premium-vector/vintage-spices-logo_872660-7.jpg?semt=ais_hybrid&w=740"
              alt="SpiceTalks Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </Link>
        </div>
        <h1 className="text-xl font-semibold">SpiceTalks</h1>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-6 text-lg font-medium">
        <span className="text-sm">Online: {onlineStatus ? "🟢" : "🔴"}</span>
        <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link>
        <Link to="/contact" className="hover:text-red-500 transition-colors">Contact Us</Link>
        <Link to="/grocery" className="hover:text-red-500 transition-colors">Grocery</Link>
        <Link to="/cart" className="hover:text-red-500 transition-colors">🛒 Cart ({cartItems.length})</Link>

        {/* If logged in, show user and logout */}
        {username ? (
          <div className="flex items-center gap-3">
            <span className="text-base font-semibold text-orange-600">Hi, {username}</span>
            <button
              onClick={handleLogout}
              className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="hover:text-red-500 transition-colors">Login</Link>
        )}
      </nav>
    </header>
  );
}
