import React, { useState } from 'react';

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState('outdoor');
  
  const categories = [
    { id: 'outdoor', name: '아웃도어' },
    { id: 'fitness', name: '운동/피트니스' },
    { id: 'camping', name: '캠핑' }
  ];

  return (
    <div className="category-tabs">
      {categories.map(category => (
        <button
          key={category.id}
          className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
          onClick={() => setActiveCategory(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs; 