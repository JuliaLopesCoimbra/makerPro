import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatComponent from "../components/chat/ChatComponent";
// import {
//   faEdit,
//   faTrash,
//   faInfoCircle,
// } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [videos, setVideos] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = Array.from(e.dataTransfer.files);
    const videoFiles = files.filter((file) => file.type.startsWith("video/"));

    if (videoFiles.length) {
      setVideos((prev) => [...prev, ...videoFiles]);
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const videoFiles = files.filter((file) => file.type.startsWith("video/"));

    if (videoFiles.length) {
      setVideos((prev) => [...prev, ...videoFiles]);
    }
  };

  const openClick = () => {
    setModal(true); // Abre a modal
  };

  const closeModal = () => {
    setModal(false); // Fecha a modal
  };

  // objeto mocado
  const stores = [
    { name: "RENNER", id: 1, description: "Loja de moda e vestuário" },
    { name: "ZARA", id: 2, description: "Moda e acessórios internacionais" },
    { name: "RIACHUELO", id: 3, description: "Vestuário e casa" },
  ];
  const handleClick = (store) => {
    // Redireciona para a página da loja e passa o objeto pelo state
    navigate(`/section/${store.name.toLowerCase()}`, { state: store });
  };
  return (
    <>
      <div className="bg-gray-100 py-24 sm:py-24">
       
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="   text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Analise dados reais desenvolvidos pela Inteligência Aritificial
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div
                className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]"
                onClick={openClick}
              >
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Inserir dados
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Capture fotos para análise no sistema. Nosso sistema utiliza
                    tecnologia avançada para processar e interpretar as imagens,
                    oferecendo resultados rápidos e confiáveis. Ao tirar as
                    fotos, siga as orientações fornecidas para obter o melhor
                    desempenho da análise.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src="img/realphoto.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  {/* <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    GRAFICOS FUTUROS
                  </p> */}
                  {/* <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Esta é a porcentagem que reflete o volume de informações já
                    registradas, garantindo maior eficiência e organização no
                    processamento. Continue alimentando o sistema para atingir
                    100% e aproveitar ao máximo todos os recursos disponíveis.
                  </p> */}
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  {/* linechart */}
                  <img
                    className="w-full max-lg:max-w-xs"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  {/* <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Segurança de dados
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    A segurança de dados no sistema é tratada com a máxima
                    prioridade. O processamento ocorre em ambiente seguro,
                    garantindo confidencialidade e uso exclusivo para os fins
                    especificados.
                  </p> */}
                </div>
                <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                  <img
                    className="h-[min(152px,40cqw)] object-cover"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Lojas
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Escolha qual loja vc deseja visualizar os dados.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-white shadow-2xl">
                    <div className="flex flex-col items-center bg-white ring-1 space-y-4 py-6">
                      {/* Objetos das lojas cadastradas pelo backend */}
                      {stores.map((store) => (
                        <div
                          key={store.id}
                          className="p-6 w-11/12 max-w-md text-black border border-gray-300 rounded-lg text-lg flex items-center justify-center cursor-pointer"
                          style={{
                            backgroundImage: `url('/img/${store.name.toLowerCase()}.jpg')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                          onClick={() => handleClick(store)}
                        >
                          <span className="bg-white bg-opacity-75 px-4 py-2 rounded-lg ">
                            CLIQUE AQUI
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1  max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-96"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <h2 className="text-lg font-bold mb-4">Upload de Vídeos</h2>

            {/* Área de Drag and Drop */}
            <div
              className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center mb-4"
              style={{ height: "150px" }}
            >
              <p className="text-gray-600">
                Arraste e solte arquivos de vídeo aqui
              </p>
              <p className="text-sm text-gray-400">ou</p>
              <label
                htmlFor="fileInput"
                className="text-blue-500 cursor-pointer underline"
              >
                selecione arquivos do seu dispositivo
              </label>
              <input
                id="fileInput"
                type="file"
                accept="video/*"
                multiple
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>

            {/* Lista de vídeos */}
            {videos.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-bold mb-2">Vídeos selecionados:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {videos.map((video, index) => (
                    <li key={index}>{video.name}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Botões de Ação */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  console.log("Vídeos para upload:", videos);
                  closeModal();
                }}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
