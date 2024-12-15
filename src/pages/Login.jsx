import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../index.css";
//components
import Input from "../components/Input";
import { toast } from "react-toastify";
//services
import { API_URL_USER } from "../services/api.ts";

const Login = () => {
  //   const { checkDailyLogin } = useAuth(); // logou hoje ja? então entra
  //CONTROL MESSAGE OF ERROR LOGIN
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Estado para controle de carregamento
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate(); // Inicialize o hook

  //funcao logar
  const handleLogin = async (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário
    setIsLoading(true); // Define o estado de carregamento

    const formData = new FormData(e.target); // Captura os dados do formulário
    const loginData = {
      AccessKey: formData.get("email"),
      SecretKey: formData.get("password"),
    };

    try {
      const response = await fetch(`${API_URL_USER}/Accessor/Login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      // Verifica o código de status
      if (response.status === 422) {
        toast.error("Credenciais inválidas. Verifique seu email ou senha.");
        throw new Error("Credenciais inválidas.");
      }

      if (response.status === 500) {
        toast.error("Erro no servidor. Tente novamente mais tarde.");
        throw new Error("Erro no servidor.");
      }

      if (!response.ok) {
        toast.error("Erro inesperado. Tente novamente.");
        throw new Error("Erro inesperado.");
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
      setIsLoading(false);
    }
  };

  // logou hoje ja? então entra
  //   useEffect(() => {
  //     if (checkDailyLogin()) {
  //       // Se o usuário já fez login hoje, redireciona para o dashboard
  //       navigate("/dashboard");
  //     }
  //   }, [navigate, checkDailyLogin]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/img/LOGOMAKER.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Entre na sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleLogin}
            action="#"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  // type="email"
                  // required
                  // autoComplete="email"
                  value="123"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Senha
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value="123"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Entrar
              </button>
            </div>
          </form>

          {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Login;
