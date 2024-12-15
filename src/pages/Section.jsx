//react
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//components
import Header from "../components/Header";
//services
import { API_URL } from "../services/api.ts";

const Section = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const store = location.state;
  // Estado para armazenar os dados da API
  const [sessions, setSessions] = useState([]);
  const [error, setError] = useState(null);

  const posts = [
    {
      id: 1,
      title: "Inserção de dados",

      description: "descrição da renner",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "walker", href: "#" },
      author: {
        name: "Junior ",
        role: "Co-Founder / Picbrand",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 2,
      title: "Inserção de dados",

      description: "tirei foto de tenis da renner",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "WALKER", href: "#" },
      author: {
        name: "Fernando",
        role: "dev Picbrand",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 1,
      title: "Inserção de dados",
      href: "#",
      description: "tirei foto de calças da renner",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Maker", href: "#" },
      author: {
        name: "Juliano",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  // Função para buscar os dados da API
  const getStoreSession = async () => {
    const token = localStorage.getItem("authToken"); // Recupera o token do LocalStorage
    try {
      const response = await fetch(`${API_URL}/StoreSession/StoreSession/1`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
        },
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar dados: ${response.status}`);
      }

      const data = await response.json();
      setSessions(data); // Salvar dados no estado
    } catch (err) {
      console.error("Erro ao buscar os dados:", err);
      setError(err.message); // Salvar o erro no estado
    }
  };

  // useEffect para carregar os dados ao montar o componente
  useEffect(() => {
    getStoreSession();
  }, []);

  const handleClick = (post) => {
    navigate(`/section-area`, { state: post });
  };

  return (
    <>
      <Header></Header>
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          {store.name} | {store.description}
        </h1>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Histórico de Sessões
              </h2>
              <p className="mt-2 text-lg/8 text-gray-600">
                Visualize as sessões da loja selecionada
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="flex max-w-xl flex-col items-start justify-between"
                  onClick={() => handleClick(post)}
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      {post.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      alt=""
                      src={post.author.imageUrl}
                      className="size-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm/6">
                      <p className="font-semibold text-gray-900">
                        {post.author.name}
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
