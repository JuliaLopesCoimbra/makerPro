// Login.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../index.css";
// import BASE_URL from "../config";

//components
import Input from "../components/Input";

const Login = () => {

  //   const { checkDailyLogin } = useAuth(); // logou hoje ja? então entra
  //CONTROL MESSAGE OF ERROR LOGIN
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);


  const navigate = useNavigate(); // Inicialize o hook


  //funcao logar
  const handleLogin = async (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)
    navigate("/dashboard")
    // if(1==2){
    //     setIsSuccess(true);
    //     setMessage("Login bem-sucedido! Redirecionando...");
    // }else{
    //     setIsSuccess(false);
    //     setMessage("Erro no login. Tente novamente.");
    // }
    // e.preventDefault();
    // try {
    //   const response = await fetch(`${BASE_URL}/Organizer/Login`, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       Login: login,
    //       SecretKey: password,
    //     }),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     const organizerData = data.Organizers[0];
    //     const { OrganizerId, OrganizerName } = organizerData;

    //     // Salva o OrganizerId e a data do login no localStorage
    //     localStorage.setItem("userId", OrganizerId);
    //     localStorage.setItem("userName", OrganizerName);
    //     localStorage.setItem("lastLoginDate", new Date().toISOString());

    //     setIsSuccess(true);
    //     setMessage("Login bem-sucedido! Redirecionando...");
    //     setTimeout(() => {
    //       navigate("/dashboard");
    //     }, 2000);
    //   } else if (response.status === 422) {
    //     setIsSuccess(false);
    //     const errors = data.Errors.join(", ");
    //     setMessage(`Erro no login: ${errors}`);
    //   } else {
    //     setIsSuccess(false);
    //     setMessage("Erro no login. Tente novamente.");
    //   }
    // } catch (error) {
    //   setIsSuccess(false);
    //   setMessage(`Erro ao conectar com o servidor: ${error.message}`);
    // }
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
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.vexels.com%2Fpng-svg%2Fprevisualizar%2F224226%2Flogotipo-minimalista-da-casa&psig=AOvVaw1kjb8_ruNOz0EpjtpDpFf7&ust=1733279004123000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjtlNDFiooDFQAAAAAdAAAAABAE"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Entre na sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email 
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Senha
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
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
