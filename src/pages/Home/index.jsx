import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579125305607-15279d30d370?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-6xl font-extrabold">O MELHOR FESTIVAL DE SERGIPE</h2>
          <p className="mt-4 text-lg text-gray-300">Viva a experiência do FASC 2077</p>
          <a href="#ingressos" className="no-underline mt-6 inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-lg rounded-full">
            Garanta seu ingresso
          </a>
        </div>
      </section>

      {/* Seção ao rolar */}
      <section id="sobre" className="h-screen flex items-center justify-center bg-gray-900">
        <h2 className="text-4xl font-bold">Sobre o Evento</h2>
      </section>
    </Layout>
  );
}
