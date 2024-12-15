import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Header from "../../components/Header";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    marca: "Aventus",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Premium Tee",
    marca: "Aventus",

    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Premium Tee in white.",
    price: "$50",
    color: "White",
  },
  {
    id: 3,
    name: "Long Sleeve Tee",
    marca: "Aventus",

    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Long Sleeve Tee in gray.",
    price: "$40",
    color: "Gray",
  },
  {
    id: 4,
    name: "Hoodie",
    marca: "Aventus",

    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "Front of men's Hoodie in blue.",
    price: "$70",
    color: "Blue",
  },
  // Add more products as needed...
];

const SectionDetails = () => {
  const location = useLocation();
  const { video, post } = location.state || {}; // Destructure and handle undefined state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!post) {
    return <div className="text-center text-lg">Nenhum post selecionado.</div>;
  }
  // Safely access imageUrl
  const imageUrl = post.author?.imageUrl;

  const openDialog = (product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedProduct(null);
    setIsDialogOpen(false);
  };

  return (
    <>
      <Header />
      <div className="p-6">
        {/* Maker Responsável Section */}
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Maker Responsável da Sessão | {post.date}
        </h2>
        <div className="mt-4 flex items-center space-x-4">
          <img
            src={post.author.imageUrl}
            alt={post.author.name}
            className="rounded-full w-20 h-20"
          />
          <div>
            <p className="font-bold text-lg text-gray-900">
              {post.author.name}
            </p>
            <p className="text-gray-500">{post.author.role}</p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Produtos
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative"
                onClick={() => openDialog(product)}
              >
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
                    {/* <DialogTitle className="text-base font-semibold text-gray-900">Panel title</DialogTitle> */}
                    <DialogTitle className="">
                      {selectedProduct?.name}
                    </DialogTitle>
                    <div className="p-4">
                      <p className="text-gray-700">
                        Marca:{" "}
                        <span className="font-medium">
                          {selectedProduct?.marca}
                        </span>
                      </p>
                      <p className="text-gray-700">
                        Cor:{" "}
                        <span className="font-medium">
                          {selectedProduct?.color}
                        </span>
                      </p>
                      <div className="mt-6 grid grid-cols-1 gap-6">
                        <DialogTitle className="">Frente</DialogTitle>
                        <img
                          src={selectedProduct?.imageSrc}
                          alt={selectedProduct?.imageAlt}
                          className="w-full rounded-md mb-4"
                        />
                        <DialogTitle className="">trás</DialogTitle>
                        <img
                          src={selectedProduct?.imageSrc}
                          alt={selectedProduct?.imageAlt}
                          className="w-full rounded-md mb-4"
                        />
                        <DialogTitle className="">Etiqueta</DialogTitle>
                        <img
                          src={selectedProduct?.imageSrc}
                          alt={selectedProduct?.imageAlt}
                          className="w-full rounded-md mb-4"
                        />
                        <DialogTitle className="">obs</DialogTitle>
                        <img
                          src={selectedProduct?.imageSrc}
                          alt={selectedProduct?.imageAlt}
                          className="w-full rounded-md mb-4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    {/* Your content */}
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default SectionDetails;
