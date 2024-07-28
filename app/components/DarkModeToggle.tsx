import React, { useCallback, useState } from "react";
import Sun from "../../public/icon-sun.svg";
import Moon from "../../public/icon-moon.svg";
import { motion } from "framer-motion";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  }, []);
  return (
    <button
      onClick={toggleDarkMode}
      type="button"
      className="cursor-pointer text-[#7E88C3]"
    >
      <motion.div
        key={darkMode ? "moon" : "sun"}
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 180 }}
        transition={{ duration: 0.5 }}
      >
        {darkMode ? <Sun /> : <Moon />}
      </motion.div>
    </button>
  );
};

export default DarkModeToggle;
