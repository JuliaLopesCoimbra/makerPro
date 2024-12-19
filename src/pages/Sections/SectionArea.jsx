import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//components
import { UserCircleIcon } from "@heroicons/react/24/solid"; // Ícone do Heroicons

//services
import { API_URL } from "../../services/api.ts";

const SectionArea = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sessionId = location.state?.id;

  const getStoreSessionArea = async () => {
    setLoading(true);
    const token = localStorage.getItem("authToken");
    try {
      const response = await fetch(
        `${API_URL}/SessionFile/SessionFile/${sessionId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Erro ao buscar dados: ${response.status}`);
      }

      const data = await response.json();
      setFiles(data);
    } catch (err) {
      console.error("Erro ao buscar os dados:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (sessionId) {
      getStoreSessionArea();
    } else {
      setError("Session ID não encontrado");
    }
  }, [sessionId]);

  const handleClick = (file) => {
    navigate(`/section-details`, {
      state: { file: { state: file.SessionFileId } },
    });
  };

  return (
    <>
      <div className=""></div>
      <div className="top-0 left-0 w-full h-4 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"></div>
      <div className="bg-gray-100 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
          <p className="flex items-center font-bold tracking-tight text-gray-500 mb-10">
            <UserCircleIcon className="h-6 w-6 text-gray-500 mr-2" />
            Fernando Filho - Walker Responsável da Sessão
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
            Arquivos da Sessão
          </h2>
          {/* Mostra o Loading enquanto carrega */}
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : files.length === 0 ? (
            <p className="text-gray-500 text-lg">Nenhum arquivo encontrado.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {files.map((file, index) => (
                <div
                  key={`file-${index}`}
                  onClick={() => handleClick(file)}
                  className="group cursor-pointer relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out"
                >
                  {/* Exibição do thumbnail (ou vídeo de exemplo) */}
                  <div className="relative h-48 bg-gray-200">
                    <video
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      src={file.FileURL} // Certifique-se de que `FileURL` exista na API
                      muted
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {file.FileType}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Quantidade de Itens: {file.PiecesBySessionFile}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionArea;
