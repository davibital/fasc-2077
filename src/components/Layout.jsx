import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="dark bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className={`fixed w-full top-0 left-0 z-50 transition-all ${scrolled ? "bg-black/90 shadow-md" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">FASC 2077</h1>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/shows" className="hover:text-gray-400">Shows & Palcos</Link></li>
          </ul>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="flex-grow pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 mt-10">
        <p className="text-gray-400">© 2025 FASC 2077. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
