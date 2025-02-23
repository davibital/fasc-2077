import { useState, useEffect } from "react";
import { fetchShows, fetchStages } from "../api";
import Layout from "../components/Layout";

export default function ShowsStages() {
  const [stages, setStages] = useState([]);
  const [shows, setShows] = useState([]);
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // Fade para os palcos
  const [isTransitioning, setIsTransitioning] = useState(false); // Animação nos shows

  useEffect(() => {
    async function loadData() {
      const stagesData = await fetchStages();
      const showsData = await fetchShows();
      setStages(stagesData);
      setShows(showsData);
    }
    loadData();
  }, []);

  if (stages.length === 0) return <Layout><p className="text-center mt-20">Carregando...</p></Layout>;

  const changeStage = (direction) => {
    setIsFading(true); // Fade-out do palco
    setIsTransitioning(true); // Ativa transição dos shows
    setTimeout(() => {
      setSelectedStageIndex((prevIndex) => (prevIndex + direction + stages.length) % stages.length);
      setIsFading(false); // Fade-in do novo palco
    }, 300);
    setTimeout(() => {
      setIsTransitioning(false); // Termina a animação dos shows
    }, 400);
  };

  const selectedStage = stages[selectedStageIndex];
  const filteredShows = shows.filter(show => show.location === selectedStage.name);

  return (
    <Layout>
      {/* Seção de fundo com imagem */}
      <section 
        className={`h-[60vh] flex items-center justify-center bg-cover bg-center relative transition-opacity duration-500 ease-in-out ${isFading ? "opacity-0" : "opacity-100"}`} 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1566981731417-d4c8e17a9e82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-5xl font-extrabold">{selectedStage.name}</h2>
          <p className="text-lg text-gray-300 mt-2">{selectedStage.location}</p>
          <p className="mt-4 max-w-2xl mx-auto">{selectedStage.history}</p>

          {/* Controles do carrossel */}
          <div className="flex justify-center space-x-6 mt-6">
            <button
              onClick={() => changeStage(-1)}
              className="text-white bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition-transform transform active:scale-95"
            >
              ◀ Anterior
            </button>
            <button
              onClick={() => changeStage(1)}
              className="text-white bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition-transform transform active:scale-95"
            >
              Próximo ▶
            </button>
          </div>
        </div>
      </section>

      {/* Lista de shows no palco selecionado */}
      <div className="max-w-5xl mx-auto p-6">
        <h3 className="text-3xl font-semibold text-center mb-6">Shows neste palco</h3>

        <div className={`grid md:grid-cols-2 gap-6 transition-all duration-500 ${isTransitioning ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}>
  {filteredShows.length > 0 ? filteredShows.map((show, index) => (
    <div 
      key={index} 
      className="relative bg-gray-900/60 border border-gray-800 rounded-lg p-6 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    >
      {/* Imagem com overlay */}
      <div className="relative overflow-hidden rounded-lg">
        <img src={show.imgUrl} alt={show.name} className="w-full h-56 object-cover rounded-md brightness-75 transition-all duration-300 hover:brightness-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
      </div>

      {/* Conteúdo do card */}
      <div className="mt-4 text-white text-center">
        <h3 className="text-2xl font-bold">{show.name}</h3>
        <p className="text-gray-400 mt-1">{show.description}</p>
        <p className="mt-3 text-sm text-gray-300">
          📍 <span className="text-gray-200 font-semibold">{show.location}</span>
        </p>
        <p className="text-sm text-gray-300">
          ⏰ {new Date(show.startDate).toLocaleString()}
        </p>

        {/* Botão interativo */}
        <button className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/50">
          Ver detalhes
        </button>
      </div>
    </div>
  )) : <p className="text-gray-400 text-center">Nenhum show programado para este palco.</p>}
</div>

      </div>
    </Layout>
  );
}
