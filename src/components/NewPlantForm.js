import React, {useState} from "react";

const initialForm = {
  name: "",
  image: "",
  price: "",
}

function NewPlantForm({addPlant}) {
  const [formData, setFormData] = useState(initialForm)

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then((newPlant) => {addPlant(newPlant)})
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={formData.name} 
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formData.image} 
          onChange={handleChange}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={formData.price} 
          onChange={handleChange}
        />
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
