//home.jsx
import HomeLayout from "@/components/ui/homeLayout";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  const [heroHeight, setHeroHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => {
      const navbar = document.querySelector("nav");
      if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        setHeroHeight(`${window.innerHeight - navbarHeight}px`);
      }
    };

    window.addEventListener("resize", updateHeight);
    updateHeight();
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <HomeLayout>
      {/* Wrapper principal COM SCROLL FUNCIONAL */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">

        
        {/* Hero Section ajustada */}
        <section
          className="snap-start flex items-center justify-center bg-cover bg-center relative w-full min-h-screen"
          style={{ backgroundImage: "url('https://scontent.faju23-1.fna.fbcdn.net/v/t39.30808-6/466790670_1069698848287992_1581847033326707520_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=RK-lGPfd84sQ7kNvgGvHd9V&_nc_oc=Adgs4bWe3u8vCesg6yHYzMnUT4R_8y6waL-peOxPGOs7wI1xBGo9M6tTBBqA1aDTanc&_nc_zt=23&_nc_ht=scontent.faju23-1.fna&_nc_gid=Auna_9-BYfuQQ-nJxlA2A25&oh=00_AYAxmoDAD3FfuSMBNECQLYzVtUmikxHDpXwk017hEnyhFQ&oe=67C1BD54')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="relative z-10 text-center text-white"
          >
            <h2 className="text-6xl font-extrabold">O MELHOR FESTIVAL DE SERGIPE</h2>
            <p className="mt-4 text-lg text-gray-300">Viva a experiência do FASC 2077</p>
            <a href="/shows" className="no-underline mt-6 inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/50">
              Confira nossas atrações!
            </a>
          </motion.div>
        </section>

        {/* Outras seções */}
        {[
          { title: "Sobre o Evento", text: "O Festival de Artes de São Cristóvão (FASC) é um evento cultural de destaque no estado de Sergipe, reconhecido como o maior do Nordeste. Espaços como a Praça São Francisco, a Praça do Carmo e o Cine Theatro Lar Imaculada Conceição recebem apresentações de artistas locais, nacionais e internacionais, proporcionando ao público experiências culturais enriquecedoras.", img: "https://scontent.faju23-1.fna.fbcdn.net/v/t39.30808-6/380275859_814520133805866_3945967784916668066_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=tKwGhh4GH8cQ7kNvgHbir0H&_nc_oc=AdhwbWKpVZEHMRjF_GBNYnMuL2o_8pojoXjqp9ZX3Q689X_VBXPTd3MRZR60-0QJTso&_nc_zt=23&_nc_ht=scontent.faju23-1.fna&_nc_gid=ADXOku_kADhlLDy2X8cfbkb&oh=00_AYBM2k1KMRZEse4C8g4ecz_pabRlgKjR-5Atg5pab7ASvw&oe=67C19958" },
          { title: "A Experiência", text: "Durante o festival, a cidade de São Cristóvão se transforma em um palco vibrante de manifestações artísticas, oferecendo uma programação diversificada que inclui música, teatro, dança, literatura, artes visuais e cinema.", img: "/assets/img/fasc3.jpg" },
          { title: "Uma Celebração Cultural", text: "O FASC é uma oportunidade única para vivenciar a riqueza cultural de São Cristóvão e de Sergipe, celebrando a diversidade artística e a história da região. A tão aguardada edição de 2077 promete misturar expressões artísticas consagradas e talentos emergentes.", img: "/assets/img/fasc2.png" }
        ].map((section, index) => (
          <motion.section
            key={index}
            className="snap-start flex flex-col justify-center items-center bg-cover bg-center relative text-center px-6 w-full min-h-screen"
            style={{ backgroundImage: `url('${section.img}')` }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            variants={sectionVariants}
            viewport={{ once: true, amount: 0.6 }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <motion.div className="relative z-10 text-white">
              <h2 className="text-4xl font-bold">{section.title}</h2>
              <p className="text-lg mt-4 max-w-3xl mx-auto">{section.text}</p>
            </motion.div>
          </motion.section>
        ))}
      </div>
    </HomeLayout>
  );
}
