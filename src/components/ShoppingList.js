import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [selectedCategory, setSelectedCategory] = useState("All")
function handleFilterChange(event) {
  setSelectedCategory(event.target.value)
}

const itemsToDisplay = items.filter((item) => {
  if(item.category === selectedCategory) {
    return item;
  } else if(selectedCategory === "All"){
    return item;
  }
})

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilterChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
