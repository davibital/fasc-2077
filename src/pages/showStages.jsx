import { useState, useEffect } from "react";
import { fetchShows, fetchStages } from "../api";
import Layout from "../components/Layout";
import ShowModal from "@/components/showModal/showModal";

export default function ShowsStages() {
  const [stages, setStages] = useState([]);
  const [shows, setShows] = useState([]);
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    async function loadData() {
      const stagesData = await fetchStages();
      const showsData = await fetchShows();
      setStages(stagesData);
      setShows(showsData);
    }
    loadData();
  }, []);

  if (stages.length === 0)
    return (
      <Layout>
        <p className="text-center mt-20">Carregando...</p>
      </Layout>
    );

  const changeStage = (direction) => {
    setIsFading(true);
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedStageIndex(
        (prevIndex) => (prevIndex + direction + stages.length) % stages.length
      );
      setIsFading(false);
    }, 300);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const selectedStage = stages[selectedStageIndex];
  const filteredShows = shows.filter((show) => show.location === selectedStage.name);

  // Mapeamento de imagens para cada palco (nomes iguais aos da API)
  const stageImages = {
    "Palco João Bebe Água":
      "https://publicacao.saocristovao.se.gov.br/laravel-filemanager/photos/17/VictorBalde_Fasc2023_Dia3_Groundation-Selecao-18.jpg",
    "Palco Frei Santa Cecília":
      "https://publicacao.saocristovao.se.gov.br/laravel-filemanager/photos/14/3.12%20academia%20da%20berlinda%20(1).jpg",
    "Palco Samba na Bica":
      "/public/assets/img/sambaNaBica.jpeg",
    "Música na Igreja": "/assets/img/igreja.jpg", // Caminho relativo para imagens locais
  };

  // Obtém a imagem correspondente ao palco selecionado ou usa uma padrão
  const selectedStageImage =
    stageImages[selectedStage?.name] ||
    "https://images.unsplash.com/photo-1566981731417-d4c8e17a9e82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D";

  return (
    <Layout>
      {/* Seção de fundo com imagem */}
      <section
  className={`h-[60vh] flex items-center justify-center bg-cover bg-center relative transition-opacity duration-500 ease-in-out ${
    isFading ? "opacity-0" : "opacity-100"
  }`}
  style={{
    backgroundImage: `url('${selectedStageImage}')`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="absolute inset-0 bg-black/60"></div>
  
  {/* Conteúdo do palco */}
  <div className="relative z-10 text-center text-white px-6">
    <h2 className="text-5xl font-extrabold">{selectedStage.name}</h2>
    <p className="text-lg text-gray-300 mt-2">{selectedStage.location}</p>
    <p className="mt-4 max-w-2xl mx-auto">{selectedStage.history}</p>
  </div>

  {/* Botões fixos na parte inferior */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-6">
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
</section>

      {/* Lista de shows no palco selecionado */}
      <div className="max-w-5xl mx-auto p-6">
        <h3 className="text-3xl font-semibold text-center mb-6">Shows neste palco</h3>

        <div
          className={`grid md:grid-cols-2 gap-6 transition-all duration-500 ${
            isTransitioning ? "opacity-0 scale-90" : "opacity-100 scale-100"
          }`}
        >
          {filteredShows.length > 0 ? (
            filteredShows.map((show, index) => (
              <div
                key={index}
                className="relative bg-gray-900/60 border border-gray-800 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Imagem */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={show.imgUrl}
                    alt={show.name}
                    className="w-full h-56 object-cover rounded-md brightness-90 transition-all duration-300 hover:brightness-100"
                  />
                </div>

                {/* Nome e Botão */}
                <div className="mt-4 text-white text-center p-4">
                  <h3 className="text-xl font-bold">{show.name}</h3>

                  {/* Botão de detalhes */}
                  <button
                    onClick={() => setSelectedShow(show)}
                    className="rounded-full mt-3 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium transition-all duration-300 shadow-md hover:shadow-red-500/50"
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">
              Nenhum show programado para este palco.
            </p>
          )}
        </div>
      </div>

      {/* Modal */}
      <ShowModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </Layout>
  );
}
