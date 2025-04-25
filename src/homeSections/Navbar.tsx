"use client";
import { Home, Code } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

export const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { path: "/", icon: <Home className="h-5 w-5" />, label: "Home" },
    {
      path: "/projects",
      icon: <Code className="h-5 w-5" />,
      label: "Projects",
    },
  ];

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50 ">
      <motion.nav
        className="flex p-[2.5px] border justify-center items-center gap-1 border-white/20 rounded-full bg-gray-900/80 backdrop-blur-lg shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      >
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} className="relative group">
            <motion.div
              className={`nav-item ${
                pathname === item.path
                  ? "bg-indigo-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}

              {/* Show tooltip on hover */}
              <span className="tool-tip">{item.label}</span>
            </motion.div>

            {/* Active indicator dot */}
            {pathname === item.path && (
              <motion.div
                className="nav-indicator"
                layoutId="navIndicator"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                initial={false}
              />
            )}
          </Link>
        ))}
      </motion.nav>
    </div>
  );
};
