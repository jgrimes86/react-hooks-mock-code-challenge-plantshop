import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantDisplay = plants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} />
  })

  return (
    <ul className="cards">
      {plantDisplay}
    </ul>
  );
}

export default PlantList;
