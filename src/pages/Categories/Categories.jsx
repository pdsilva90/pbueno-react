import React, { useState, useEffect } from 'react';
import CategoryList from '../../components/CategoryList/CategoryList';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [activeCat, setActiveCat] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch('/api/categories');
      try {
      const data = await res.json();
      setCategories(data);
    } catch (err) {
        console.error(err);
    }
}
    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <CategoryList
        categories={categories}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />
    </div>
  );
}