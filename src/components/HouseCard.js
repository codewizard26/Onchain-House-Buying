import React from "react";

function HouseCard({ house }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48">
        <img
          src={house.image}
          alt={house.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "/placeholder-house.jpg";
          }}
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 truncate">{house.title}</h2>
        <p className="text-2xl font-bold text-green-600">{house.price}</p>
      </div>
    </div>
  );
}

export default HouseCard;
