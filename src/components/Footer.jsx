import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Informações principais */}
        <div className="flex flex-col items-center justify-between lg:flex-row lg:items-start">
          {/* Informações da Empresa */}
          <div className="mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold text-white">Maker PRO</h2>
            <p className="mt-2 text-sm text-gray-400">
              Gerenciando dados de lojas com inteligência e segurança.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              <strong>Endereço:</strong> Rua das Lojas, 123, Centro, São Paulo -
              SP, Brasil
            </p>
            <p className="mt-2 text-sm text-gray-400">
              <strong>Telefone:</strong>{" "}
              <a href="tel:+5511999999999" className="hover:text-blue-500">
                +55 (11) 99999-9999
              </a>
            </p>
            <p className="mt-2 text-sm text-gray-400">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contato@scanstore.com"
                className="hover:text-blue-500"
              >
                contato@makerpro.com
              </a>
            </p>
          </div>
          {/* Links Rápidos */}
          <div className="flex flex-col lg:flex-row lg:space-x-10">
            {/* <div>
              <h3 className="text-lg font-semibold text-white">Navegação</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <a
                    href="/"
                    className="hover:text-blue-500 transition-colors duration-200"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-blue-500 transition-colors duration-200"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-blue-500 transition-colors duration-200"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div> */}
            {/* <div className="mt-6 lg:mt-0">
              <h3 className="text-lg font-semibold text-white">Suporte</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <a
                    href="/faq"
                    className="hover:text-blue-500 transition-colors duration-200"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/help"
                    className="hover:text-blue-500 transition-colors duration-200"
                  >
                    Ajuda
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="hover:text-blue-500 transition-colors duration-200"
                  >
                    Termos &amp; Condições
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        {/* Linha de separação */}
        <hr className="my-6 border-gray-700" />
        {/* Links Sociais */}
        <div className="flex items-center justify-center space-x-6">
          <a
            href="https://facebook.com/Maker Pro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a
            href="https://twitter.com/Maker Pro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a
            href="https://instagram.com/Maker Pro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href="https://linkedin.com/company/Maker Pro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-500">
          © 2024 Maker Pro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
