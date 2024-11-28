import React from 'react';
import styled from 'styled-components';

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', name: '전체보기' },
    { id: 'exercise', name: '운동' },
    { id: 'hiking', name: '등산' },
    { id: 'running', name: '러닝' },
    { id: 'cycling', name: '자전거' },
    { id: 'camping', name: '캠핑' },
    { id: 'etc', name: '기타' }
  ];

  return (
    <TabsContainer>
      {categories.map(category => (
        <TabButton
          key={category.id}
          isActive={activeCategory === category.id}
          onClick={() => onCategoryChange(category.id)}
          role="tab"
          aria-selected={activeCategory === category.id}
        >
          {category.name}
        </TabButton>
      ))}
    </TabsContainer>
  );
};

const TabsContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 16px;
  margin: 0 auto 32px;
  max-width: 800px;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);

  @media (max-width: 768px) {
    padding: 16px;
    margin: 0 16px 24px;
  }
`;

const TabButton = styled.button`
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 15px;
  font-weight: 500;
  background: ${props => props.isActive ? '#555' : '#f5f6f7'};
  color: ${props => props.isActive ? 'white' : '#555'};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.isActive ? '#555' : '#eef0f2'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export default CategoryTabs; 