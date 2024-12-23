import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { toast } from "react-toastify";
//services
import { API_URL_USER } from "../services/api.ts";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate(); // Inicialize o hook para navegação

  const handleLogin = async (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário
    setIsLoading(true); // Define o estado de carregamento

    const loginData = {
      AccessKey: email,
      SecretKey: password,
    };

    try {
      const response = await fetch(`${API_URL_USER}/Accessor/Login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      // Verifica os códigos de status
      if (response.status === 422) {
        toast.error("Credenciais inválidas. Verifique seu email ou senha.");
        setIsLoading(false);
        return;
      }

      if (response.status === 500) {
        toast.error("Erro no servidor. Tente novamente mais tarde.");
        setIsLoading(false);
        return;
      }

      if (!response.ok) {
        toast.error("Erro inesperado. Tente novamente.");
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      const token = data.Token;

      // Armazenar o token no LocalStorage
      localStorage.setItem("authToken", token);

      toast.success("Login bem-sucedido!");
      setIsLoading(false);

      // Redireciona para o dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro durante o login:", error);
      toast.error("Erro durante o login. Tente novamente.");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#021529]">
      <div className="w-full max-w-screen-md flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Faça Login</h1>
          <p className="text-gray-600 mb-6">Acesse sua conta para continuar.</p>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                id="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition duration-300 ${
                isLoading && "opacity-50 cursor-not-allowed"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            Não tem uma conta?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Cadastre-se
            </a>
          </p>
        </div>
        <div
          className="md:w-1/2 h-64 md:h-auto bg-cover bg-center"
          style={{
            backgroundImage: "url('img/homeClothes.jpg')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
