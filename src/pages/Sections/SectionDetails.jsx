//react
import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
//components
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
//services
import { API_URL } from "../../services/api.ts";

// const products = [
//   {
//     id: 1,
//     name: "Basic Tee",
//     marca: "Aventus",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 2,
//     name: "Premium Tee",
//     marca: "Aventus",

//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg",
//     imageAlt: "Front of men's Premium Tee in white.",
//     price: "$50",
//     color: "White",
//   },
//   {
//     id: 3,
//     name: "Long Sleeve Tee",
//     marca: "Aventus",

//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg",
//     imageAlt: "Front of men's Long Sleeve Tee in gray.",
//     price: "$40",
//     color: "Gray",
//   },
//   {
//     id: 4,
//     name: "Hoodie",
//     marca: "Aventus",

//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg",
//     imageAlt: "Front of men's Hoodie in blue.",
//     price: "$70",
//     color: "Blue",
//   },
//   // Add more products as needed...
// ];

const SectionDetails = () => {
  const location = useLocation();
  const { sessionId } = location.state || {}; // Recebe o sessionId
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Estado para armazenar os dados da API
  const [pieces, setPieces] = useState([]);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [search, setSearch] = useState(); //barra de pesquisa
  const [isImageOpen, setIsImageOpen] = useState(false); // Estado para o modal de imagem
  const [selectedImage, setSelectedImage] = useState(""); // Armazena a imagem clicada

  // Filtra os produtos com base no valor do input
  const filteredPieces = pieces.filter(
    (product) =>
      product && // Verifica se o item não é null ou undefined
      product.PieceDescription && // Verifica se a propriedade existe
      product.PieceDescription.toLowerCase().includes(
        (search || "").toLowerCase()
      ) // Faz a busca
  );

  // Função para buscar os dados da API
  const getStoreSessionDetails = async () => {
    // if (!sessionId) return; // Verifica se sessionId foi recebido corretamente

    const token = localStorage.getItem("authToken");
    try {
      const response = await fetch(`${API_URL}/Piece/Piece/1`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar dados: ${response.status}`);
      }

      const data = await response.json();
      setPieces(data);
    } catch (err) {
      console.error("Erro ao buscar os dados:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect para carregar os dados ao montar o componente
  useEffect(() => {
    getStoreSessionDetails();
  }, []);

  const openDialog = (product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedProduct(null);
    setIsDialogOpen(false);
  };
  const openImage = (image) => {
    setSelectedImage(image);
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
    setSelectedImage("");
  };
  const TypingEffect = ({ text }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 50); // Velocidade de digitação (50ms entre letras)

        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text]);

    return <p>{displayText}</p>;
  };
  const text =
    "A camisa Nike branca, tamanho G, é uma tendência marcante em 2024. Lançada este ano, ela combina estilo e conforto, ideal para quem quer estar na moda.";

  return (
    <>
      <div className="bg-white">
        <div className="top-0 left-0 w-full h-4 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"></div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Produtos
          </h2>
          <div className="mb-4 flex justify-end">
            <label
              htmlFor="search-input"
              className="block text-sm font-medium text-gray-700 mb-1 mr-2 self-center"
            >
              Buscar por título
            </label>
            <input
              type="text"
              id="search-input"
              placeholder="Digite o título..."
              value={search}
              onChange={(e) => setSearch(e.target.value)} // Atualiza o estado do input
              className="w-full max-w-xs px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {loading ? (
            // Mostra o Spinner enquanto carrega
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : filteredPieces.length > 0 ? (
            // Mostra os produtos filtrados
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {filteredPieces.map((product) => (
                <div
                  key={product.PieceDetailId}
                  className="group relative"
                  onClick={() => openDialog(product)}
                >
                  <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                    <img
                      alt="Produto"
                      src={`data:image/png;base64,${product.FrontImage}`}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <h3 className="text-sm text-gray-700">
                      {product.PieceDescription}
                    </h3>
                    <p className="text-sm font-medium text-gray-900">
                      {product.BrandName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Mensagem quando nenhum produto é encontrado
            <p className="text-center text-gray-500 mt-6">
              Nenhum produto encontrado.
            </p>
          )}
        </div>
      </div>

      <Dialog
        open={isDialogOpen}
        onClose={closeDialog}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          {/* Div ao lado esquerdo */}
          <div className="w-2/3 p-16">
            <h2 className="text-lg font-bold text-white mb-4">
              Detalhes da Camisa Polo
            </h2>
            <div className="text-white">
              <TypingEffect text={text} />
            </div>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => closeDialog(false)}
                      className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                </TransitionChild>
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    {selectedProduct ? (
                      <>
                        <DialogTitle className="">
                          {selectedProduct.PieceDescription}
                        </DialogTitle>
                        <div className="p-4">
                          <p className="text-gray-700">
                            Marca:{" "}
                            <span className="font-medium">
                              {selectedProduct.BrandName}
                            </span>
                          </p>
                          <p className="text-gray-700">
                            Cor:{" "}
                            <span className="font-medium">
                              {selectedProduct.Color}
                            </span>
                          </p>
                          <p className="text-gray-700">
                            Tamanho:{" "}
                            <span className="font-medium">
                              {selectedProduct.PieceSize}
                            </span>
                          </p>
                          <p className="text-gray-700">
                            Preço:{" "}
                            <span className="font-medium">
                              {selectedProduct.Price}
                            </span>
                          </p>
                          <div className="mt-6 grid grid-cols-1 gap-6">
                            <DialogTitle className="">Frente</DialogTitle>
                            <img
                              src={`data:image/png;base64,${selectedProduct.FrontImage}`}
                              className="w-full rounded-md mb-4"
                              onClick={() =>
                                openImage(
                                  `data:image/png;base64,${selectedProduct.FrontImage}`
                                )
                              }
                            />
                            <DialogTitle className="">Trás</DialogTitle>
                            <img
                              src={`data:image/png;base64,${selectedProduct.SideImage}`}
                              className="w-full rounded-md mb-4"
                              onClick={() =>
                                openImage(
                                  `data:image/png;base64,${selectedProduct.FrontImage}`
                                )
                              }
                            />
                            <DialogTitle className="">Etiqueta</DialogTitle>
                            <img
                              src={`data:image/png;base64,${selectedProduct.FrontImage}`}
                              className="w-full rounded-md mb-4"
                              onClick={() =>
                                openImage(
                                  `data:image/png;base64,${selectedProduct.FrontImage}`
                                )
                              }
                            />
                            {/* <DialogTitle className="">obs</DialogTitle>
                            <img
                              src={`data:image/png;base64,${selectedProduct.FrontImage}`}
                              className="w-full rounded-md mb-4"
                            /> */}
                          </div>
                        </div>
                      </>
                    ) : (
                      <p className="text-center text-gray-500">
                        Nenhum produto selecionado.
                      </p>
                    )}
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>

      {/* Modal para exibir a imagem inteira */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeImage} // Fechar ao clicar fora da imagem
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar na imagem
          >
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 text-white text-2xl font-bold z-60"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="w-full max-h-full rounded-md"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SectionDetails;
