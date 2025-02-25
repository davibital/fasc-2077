import { useState, useEffect } from "react";

export default function HomeLayout({ children }) {
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
      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all bg-black/90 shadow-md"}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="/"
            className="no-underline text-2xl md:text-3xl lg:text-4xl font-bold text-white"
          >
            FASC 2077
          </a>
        </div>
      </nav>

      {/* 👇 Forçando o main a ocupar toda a tela e impedir overflow extra */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 mt-2">
        <p className="text-gray-400">
          © FASC 2077. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
