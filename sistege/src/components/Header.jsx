// src/components/Header.jsx
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  const navLink = (to, label) => (
    <Link
      to={to}
      className={`text-sm px-3 py-2 rounded transition ${
        pathname === to
          ? "text-primary font-semibold"
          : "text-gray-300 hover:text-primary"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="bg-dark border-b border-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg font-bold text-white tracking-wide">
          SISTEGE
        </div>
        <nav className="flex space-x-4">
          {navLink("/", "Home")}
          {navLink("/lideranca", "Liderança")}
          {navLink("/treinamentos", "Treinamentos")}
        </nav>
      </div>
    </header>
  );
}
