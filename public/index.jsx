import React from 'react';

function App() {
  return (
    <>
      <div className="min-h-screen bg-with flex flex-col justify-center items-center p-0 m-0">
        <header className="w-full flex">
          <noscript>You need to enable JavaScript to run this app.</noscript>
  
          {/* CABEÇALHO COM MENU PARA PALCOS */}
          <div className="md:flex">
            <div className="nav" id="menu">
              <div className="box">
                <img src="Logo.png" className="logo_fasc" alt="Logo FASC 2077" />
                <h5 className="title text-white">FASC 2077</h5>
              </div>
              <ul className="topicos text-white">
                <li><a href="shows.html">Shows</a></li>
                <li><a href="palcos.html">Palcos</a></li>
              </ul>
            </div>
          </div>
        </header>

        <main className="w-full flex flex-col items-center">
          {/* BLOCO DE TEXTOS COM IMAGENS */}
          <div className="block_text text-white">
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi culpa deserunt, qui corporis voluptatibus quod, autem aperiam nesciunt itaque placeat reiciendis beatae. Doloremque laborum delectus nostrum quasi assumenda inventore totam.</p>
            <img src="fasc1.jpeg" className="padrao_img" alt="Imagem 1" />
          </div>

          <div className="block_text2 text-white">
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi culpa deserunt, qui corporis voluptatibus quod, autem aperiam nesciunt itaque placeat reiciendis beatae. Doloremque laborum delectus nostrum quasi assumenda inventore totam.</p>
            <img src="fasc2.jpeg" className="padrao_img" alt="Imagem 2" />
          </div>

          <div className="block_text text-white">
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi culpa deserunt, qui corporis voluptatibus quod, autem aperiam nesciunt itaque placeat reiciendis beatae. Doloremque laborum delectus nostrum quasi assumenda inventore totam.</p>
            <img src="fasc3.jpeg" className="padrao_img" alt="Imagem 3" />
          </div>
        </main>

        <footer className="w-full flex justify-center box-border mt-8">
          <div className="rodape text-center">
            <p className="texto-rodape text-white">© LAWD - LIGA ACADÊMICA DE DESENVOLVIMENTO WEB</p>
          </div>
        </footer>
      </div>

      <script type="module" src="/src/index.jsx"></script>
    </>
  );
}
