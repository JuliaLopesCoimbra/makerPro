import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const area = [
  {
    id: 1,
    name: "22/12/2024",
    marca: "Aventus",
    imageSrc:
      "https://www.imagensempng.com.br/wp-content/uploads/2023/05/Icone-Reels-Instagram-Png.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "1min 50seg",
    
  },
  {
    id: 2,
    name: "22/12/2024",
    marca: "Aventus",
   
    imageSrc:
      "https://www.imagensempng.com.br/wp-content/uploads/2023/05/Icone-Reels-Instagram-Png.png",
    imageAlt: "Front of men's Premium Tee in white.",
    price: "1min 50seg",
   
  },
  {
    id: 3,
    name: "22/12/2024",
    marca: "Aventus",
  
    imageSrc:
      "https://www.imagensempng.com.br/wp-content/uploads/2023/05/Icone-Reels-Instagram-Png.png",
    imageAlt: "Front of men's Long Sleeve Tee in gray.",
    price: "1min 50seg",
    
  },
  {
    id: 4,
    name: "22/12/2024",
    marca: "Aventus",
  
    imageSrc:
      "https://www.imagensempng.com.br/wp-content/uploads/2023/05/Icone-Reels-Instagram-Png.png",
    imageAlt: "Front of men's Hoodie in blue.",
    price: "1min 50seg",
    
  },
  // Add more areas as needed...
];

const SectionArea = () => {
  const location = useLocation();
  const post = location.state;
  const navigate = useNavigate();


  if (!post) {
    return <div className="text-center text-lg">Nenhum post selecionado.</div>;
  }

 
  const handleClick = (area) => {
    navigate("/section-details", { state: { area, post } });
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

      {/* areas Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
           Videos
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {area.map((area) => (
              <div
                key={area.id}
                className="group relative"
                onClick={() => handleClick(area)}
              >
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                  <img
                    alt={area.imageAlt}
                    src={area.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={area.href}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {area.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {area.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {area.price}
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
