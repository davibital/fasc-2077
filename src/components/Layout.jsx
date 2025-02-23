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
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-4npmxl font-bold">FASC 2077</h1>
          <ul className="flex flex-col md:flex-row md:space-x-10 lg:space-x-15 md:items-center md:justify-end space-y-4 md:space-y-0">
            <li><Link to="/" className="hover:text-gray-300 text-base 2xl:text-xl">Home</Link></li>
            <li><Link to="/shows" className="hover:text-gray-300 text-base xl:text-x1">Shows & Palcos</Link></li>
          </ul>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="flex-grow pt-20">{children}</main>

      {/*Painel*/}
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 md:px-12 lg:px-20 xl:px-32 py-10 max-w-[2200px] mx-auto">
        <img src="fasc1.png" alt="Imagem Fasc_show" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-6xl mx-auto md:mx-0"></img>
        <p className="text-red-300 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-center md:text-left leading-relaxed max-w-3xl">
          O Festival de Artes de São Cristóvão (FASC) é um evento cultural de destaque no estado de Sergipe, reconhecido como o maior do Nordeste. Espaços como a Praça São Francisco, a Praça do Carmo e o Cine Theatro Lar Imaculada Conceição recebem apresentações de artistas locais, nacionais e internacionais, proporcionando ao público experiências culturais enriquecedoras.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 md:px-12 lg:px-20 xl:px-32 py-10 max-w-[2200px] mx-auto">
        <p className="text-red-300 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-center md:text-left leading-relaxed max-w-3xl">
          Durante o festival, a cidade de São Cristóvão se transforma em um palco vibrante de manifestações artísticas, oferecendo uma programação diversificada que inclui música, teatro, dança, literatura, artes visuais e cinema.</p>
        <img src="fasc2.png" alt="Imagem Fasc_dança" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-6xl mx-auto md:mx-0"></img>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 md:px-12 lg:px-20 xl:px-32 py-10 max-w-[2200px] mx-auto">
        <img src="fasc3.png" alt="Imagem Fasc_show2" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-6xl mx-auto md:mx-0"></img>
        <p className="text-red-300 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-center md:text-left leading-relaxed max-w-3xl">
          O FASC é uma oportunidade única para vivenciar a riqueza cultural de São Cristóvão e de Sergipe, celebrando a diversidade artística e a história da região.A tão aguardada edição de 2077 promete misturar expressões artísticas consagradas e talentos emergentes.</p>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 mt-10">
        <p className="text-gray-400">© 2025 FASC 2077. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
