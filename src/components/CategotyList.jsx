import React, { useState } from 'react';
import './CategoryList.css'; // Agrega los estilos CSS para el componente

function CategoryList({ categories, onCategoryClick }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryClick(category);
  };

  return (
    <div className="category-list">
      <h2>Categorías</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;