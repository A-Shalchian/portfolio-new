"use client";
import { Home, Code } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

export const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-10 ">
      <nav className="flex p-0.25 border justify-center border-white/15 rounded-full bg-indigo-400 backdrop-blur">
        <Link
          to="/"
          className={`nav-item  ${
            pathname === "/"
              ? "bg-white/80 text-gray-900"
              : "hover:bg-indigo-500 hover:text-gray-900"
          }`}
        >
          <Home />
        </Link>
        <Link
          to="/projects"
          className={`nav-item  ${
            pathname === "projects"
              ? "bg-white/80 text-gray-900"
              : "hover:bg-indigo-500 hover:text-gray-900"
          }`}
        >
          <Code />
        </Link>
      </nav>
    </div>
  );
};
