import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

const videos = [
  {
    id: 1,
    name: "Basic Teeaa",
    marca: "Aventus",
    imageSrc:
      "https://static.vecteezy.com/ti/vetor-gratis/p1/1505014-video-player-icon-vetor.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 2,
    name: "Premium Tee",
    marca: "Aventus",

    imageSrc:
      "https://static.vecteezy.com/ti/vetor-gratis/p1/1505014-video-player-icon-vetor.jpg",
    imageAlt: "Front of men's Premium Tee in white.",
  },
  {
    id: 3,
    name: "Long Sleeve Tee",
    marca: "Aventus",

    imageSrc:
      "https://static.vecteezy.com/ti/vetor-gratis/p1/1505014-video-player-icon-vetor.jpg",
    imageAlt: "Front of men's Long Sleeve Tee in gray.",
  },
  {
    id: 4,
    name: "Hoodie",
    marca: "Aventus",

    imageSrc:
      "https://static.vecteezy.com/ti/vetor-gratis/p1/1505014-video-player-icon-vetor.jpg",
    imageAlt: "Front of men's Hoodie in blue.",
  },
  // Add more products as needed...
];

const SectionArea = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const post = location.state;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!videos) {
    return <div className="text-center text-lg">Nenhum post selecionado.</div>;
  }

  const openDialog = (product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedProduct(null);
    setIsDialogOpen(false);
  };
  const handleClick = (videos) => {
    navigate(`/section-details`);
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
            Videos
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {videos.map((product) => (
              <div
                key={product.id}
                className="group relative"
                onClick={() => handleClick()}
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
    </>
  );
};

export default SectionArea;
