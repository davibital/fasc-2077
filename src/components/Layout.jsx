import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'typeface-michroma';


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
    <div className="dark bg-black text-white min-h-screen flex flex-col font-family:michroma">
      {/* Navbar*/}
      <nav className={`fixed w-full top-0 left-0 z-50 transition-all ${scrolled ? "bg-black/90 shadow-md" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="no-underline text-2xl md:text-3xl lg:text-4xl xl:text-4npmxl font-bold text-white">FASC 2077</a>

        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="flex-grow pt-20">{children}</main>



      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 mt-2">
        <p className="text-gray-400">© FASC 2077. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
