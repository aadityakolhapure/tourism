import { useState, useEffect } from "react";

export default function Footer() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <footer className="bg-neutral-900 text-white dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-6 py-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-sm text-gray-400">
              Explore the world's most stunning destinations with our expertly
              curated travel experiences. Your adventure awaits!
            </p>
          </div>
          {/* Links Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Tours
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <span>📍</span> <span>123 Adventure Lane, Wanderlust City</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>{" "}
                <a href="tel:+123456789" className="hover:text-gray-300">
                  +1 234 567 89
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>✉️</span>{" "}
                <a
                  href="mailto:info@tourism.com"
                  className="hover:text-gray-300"
                >
                  info@tourism.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Social Media and Theme Switcher */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-gray-200">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              LinkedIn
            </a>
          </div>
          {/* <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-gray-800 text-gray-300 hover:bg-gray-700 rounded-md dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button> */}
        </div>
      </div>
    </footer>
  );
}
