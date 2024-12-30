import React, { useState, useEffect } from "react";
import HouseCard from "./HouseCard";

const houseImages = [
  "/house1.jpg",
  "/house2.jpg",
  "/house3.jpg",
  "/house4.jpg",
  "/house5.jpg",
];

function NewListings() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    generateHouses();
  }, []);

  const generateHouses = () => {
    const generatedHouses = Array.from({ length: 12 }, (_, index) => ({
      id: index + 1,
      title: `House ${index + 1}`,
      price: `$${(Math.random() * (1000000 - 100000) + 100000)
        .toFixed(0)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
      image: houseImages[Math.floor(Math.random() * houseImages.length)],
    }));
    setHouses(generatedHouses);
  };

  const handleBuy = (houseId) => {
    // Handle buy action here
    console.log(`Buying house ${houseId}`);
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800 tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Buy New Listings On NeoX
        </span>
        <span className="block text-2xl font-medium mt-2 text-gray-600">
          in Spokane, WA
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {houses.map((house) => (
          <div
            key={house.id}
            className="transform transition duration-300 hover:scale-105"
          >
            <HouseCard house={house} />
            <button
              onClick={() => handleBuy(house.id)}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-semibold 
                hover:from-blue-700 hover:to-indigo-700 transition duration-300 ease-in-out 
                shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewListings;
