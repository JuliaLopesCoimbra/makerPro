"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  PopoverGroup,
  Dialog,
  DialogBackdrop,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const products = [
  {
    name: "Lojas disponíveis",
    description: "Tudo que você precisa para analisar a loja",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engajamento",
    description: "Fale direto com os recrutadores",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Segurança",
    description: "Visualize o método de segurança do sistema",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Conecte com outras lojas",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automatizações",
    description: "Build com a IA",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Suporte", href: "#", icon: PlayCircleIcon },
  { name: "Contato", href: "#", icon: PhoneIcon },
];

export default function Header() {
  const navigate = useNavigate(); // Inicialize o hook
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSignOut = () => {
    // Lógica para logout, se necessário
    navigate("/login"); // Redireciona para a página de login
  };
  const routes = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Analises", path: "/analytics" },
    { name: "Perfil", path: "/profile" },
    { name: "Configurações", path: "/settings" },
  ];
  const handleNavigate = (path) => {
    setDrawerOpen(false); // Fechar o Drawer
    navigate(path); // Navegar para a rota
  };
  const closeDialog = () => {
    setDrawerOpen(false); // Fechar o Drawer
  };

  return (
    <header className="bg-[#001f3f] ">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 text-white"
      >
        <div className="absolute left-0 top-0 p-4">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-1 justify-center lg:justify-start">
          <a href="/dashboard" className="-m-1.5 p-1.5">
            <span className="font-semibold">WALKER PRO</span>
            {/* <img
        alt=""
        src="img/CA.png"
        className="h-8 w-auto"
      /> */}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 ">
          {/* <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-700">
              Dados Analitícos
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover> */}

          {/* <a href="#" className="text-sm/6 font-semibold text-gray-700">
            Dashboard
          </a> */}

          {/* <a href="#" className="text-sm/6 font-semibold text-gray-700">
            Company
          </a> */}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
          <a
            href="/profile-client"
            className="flex items-center font-bold tracking-tight   font-semibold "
          >
            <UserCircleIcon className="h-6 w-6 text-white mr-2" />
            Usuário |
          </a>

          <a
            href="#"
            className="text-sm/6 font-semibold "
            onClick={handleSignOut}
          >
            Sair <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="img/CA.png" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={handleSignOut}
                >
                  Sair
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Drawer - Lado Esquerdo */}
      <Dialog open={drawerOpen} onClose={closeDialog} className="relative z-10">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />

        {/* Drawer Content */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {/* Container para o Drawer no lado esquerdo */}
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:-translate-x-full sm:duration-700 bg-[#001f3f]" // Cor aplicada aqui
              >
                {/* Botão de Fechar */}
                <div className="absolute right-0 top-0 -mr-8 flex pr-2 pt-4 sm:-mr-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => closeDialog(false)}
                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="sr-only">Fechar</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>

                {/* Conteúdo do Drawer */}
                <div className="flex h-full flex-col overflow-y-scroll py-6 text-white">
                  <div className="px-4 sm:px-6">
                    <h2 className="text-lg font-medium">Menu</h2>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    <ul>
                      {routes.map((route) => (
                        <li key={route.name} className="mb-4">
                          <button
                            onClick={() => handleNavigate(route.path)}
                            className="text-left block w-full px-4 py-2 text-white hover:bg-gray-700 rounded-lg"
                          >
                            {route.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </header>
  );
}
