import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//components
// import createSpinnerGIF from "../components/gifs/createSpinnerGIF";
//services
import { API_URL } from "../services/api.ts";

const Section = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const store = location.state;

  // Estado para armazenar os dados da API
  const [sessions, setSessions] = useState([]);
  const [stores, setStores] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [spinnerUrl, setSpinnerUrl] = useState("");
  const [selectedStore, setSelectedStore] = useState(null);

  // Função para buscar os dados da API
  const getStoreSession = async () => {
    const token = localStorage.getItem("authToken");
    try {
      setLoading(true); // Ativa o loading antes de buscar os dados
      const response = await fetch(`${API_URL}/StoreSession/StoreSession/1`, {
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
      setSessions(data); // Salva os dados no estado
      setLoading(false); // Desativa o loading após o carregamento bem-sucedido
    } catch (err) {
      console.error("Erro ao buscar os dados:", err);
      setError(err.message); // Salva o erro no estado
      setLoading(false); // Garante que o loading é desativado em caso de erro
    }
  };
  const getStore = async () => {
    const token = localStorage.getItem("authToken");
    try {
      setLoading(true); // Ativa o loading antes de buscar os dados
      const response = await fetch(`${API_URL}/Store/Store`, {
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
      setStores(data); // Salva os dados no estado
      setLoading(false); // Desativa o loading após o carregamento bem-sucedido
    } catch (err) {
      console.error("Erro ao buscar os dados:", err);
      setError(err.message); // Salva o erro no estado
      setLoading(false); // Garante que o loading é desativado em caso de erro
    }
  };

  // useEffect para carregar os dados ao montar o componente
  useEffect(() => {
    getStoreSession();
    getStore();
  }, []); // Dependências vazias para executar apenas uma vez

  // useEffect(() => {
  //   if (loading) {
  //     createSpinnerGIF().then((url) => setSpinnerUrl(url));
  //   } else {
  //     setSpinnerUrl(""); // Limpa a URL quando não está carregando
  //   }
  // }, [loading]);

  const handleClick = (session) => {
    navigate(`/section-area`, { state: { id: session.StoreSessionId } });
  };

  return (
    <>
      <div className="relative bg-white shadow-lg overflow-hidden">
        {/* Barra de gradiente */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"></div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div>
              <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Histórico de Sessões
                </h2>
                <select
                  className="mt-4 text-xl font-bold text-gray-900 bg-white border border-gray-300 rounded-md p-2 lg:mt-0 lg:ml-4"
                  onChange={(e) => setSelectedStore(e.target.value)}
                >
                  {stores.map((store) => (
                    <option key={store.id} value={store.id}>
                      {store.StoreName} | Loja de moda e vestuário
                    </option>
                  ))}
                </select>
              </div>
              <p className="mt-4 text-lg/8 text-gray-600">
                Visualize as sessões da loja selecionada
              </p>
            </div>

            <div className="mx-auto mt-10">
              {/* Mostra o Loading enquanto carrega */}
              {loading ? (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  {/* Mapeando sessions */}
                  {sessions.map((session, index) => (
                    <article
                      key={`session-${index}`}
                      className="flex max-w-xl flex-col items-start justify-between border border-gray-300 bg-white p-4 rounded-lg shadow-sm"
                      onClick={() => handleClick(session)}
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Sessão Criada em: {session.CreatedDate}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Quantidade de arquivos: {session.FilesByStoreSession}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
