import { useEffect, useState } from "react";

export default function ShowModal({ show, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {

    
    if (show) {
      setIsVisible(true);  // Mantém o modal no DOM
      setTimeout(() => setIsAnimating(true), 10);  // Inicia animação de entrada
    } else {
      setIsAnimating(false); // Inicia fade-out
      setTimeout(() => setIsVisible(false), 300);  // Remove do DOM após animação
    }
  }, [show]);

  if (!isVisible) return null; // Não renderiza o modal até que ele seja ativado

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"></div>

      {/* Modal só some do DOM após o fade-out terminar */}
      <div className={`bg-gray-900 text-white p-6 rounded-lg shadow-2xl max-w-lg relative transform transition-all duration-300 ${isAnimating ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
        {/* Botão de fechar */}
        <button 
          className="absolute top-3 right-3 text-gray-300 hover:text-white text-xl"
          onClick={() => {
            setIsAnimating(false); // Inicia a animação de fechamento
            setTimeout(onClose, 300); 
          }}
        >
        </button>

        {/* Imagem do artista */}
        <img src={show?.imgUrl} alt={show?.name} className="w-full h-56 object-cover rounded-md transition-all duration-300" />

        {/* Informações */}
        <div className="mt-4 text-center">
          <h2 className="text-3xl font-bold">{show?.name}</h2>
          <p className="text-gray-400 mt-2">{show?.description}</p>
        </div>
        
        {/* Local e Data */}
        <div className="mt-4 text-sm text-gray-300 text-center">
          📍 <span className="text-gray-200 font-semibold">{show?.location}</span><br/>
          ⏰ {new Date(show?.startDate).toLocaleString()}
        </div>

        {/* Fechar */}
        <button 
          onClick={() => {
            setIsAnimating(false); // Inicia fade-out
            setTimeout(onClose, 300); // Aguarda antes de remover o modal
          }}
          className="mt-5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-red-500/50 w-full"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
