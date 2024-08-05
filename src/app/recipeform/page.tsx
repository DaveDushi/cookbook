'use client'
import React, { useState } from 'react';

const RecipeForm: React.FC = () => {
  const [otherIngredient, setOtherIngredient] = useState('');
  const [isOtherChecked, setIsOtherChecked] = useState(false);
  const [cookingTime, setCookingTime] = useState(30);
  const [servings, setServings] = useState(1);

  const cuisineList = [ 'Israeli',
    'Mexican', 'Chinese', 'Texas Ranch', 'Italian', 'Indian', 'Thai', 'Japanese', 
    'French', 'Greek', 'Mediterranean', 'Spanish', 'Korean', 'Vietnamese', 
    'Middle Eastern', 'Caribbean', 'American', 'African', 'German', 'Russian', 
    'Brazilian', 'Peruvian', 'Turkish'
  ];

  const fridgeList = [
    'Milk', 'Eggs', 'Butter', 'Cheese', 'Tomatoes', 'Chicken', 'Rice', 'Pasta',
    'Bread', 'Onions', 'Garlic', 'Bell Peppers', 'Beef', 'Fish', 'Carrots',
    'Salt', 'Pepper', 'Paprika', 'Cumin', 'Turmeric', 'Oregano', 'Basil', 'Thyme',
    'Rosemary', 'Cinnamon', 'Nutmeg', 'Ginger', 'Chili Powder', 'Coriander',
    'Ketchup', 'Mustard', 'Mayonnaise', 'Soy Sauce', 'Hot Sauce', 'Vinegar',
    'Barbecue Sauce', 'Teriyaki Sauce', 'Olive Oil', 'Sesame Oil', 'Honey'
  ];
  
  

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 mt-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Your Perfect Recipe</h2>
      
      <form>
        {/* What's in your fridge/closet */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            What's in your fridge/closet?
          </label>
          <div className="flex flex-wrap gap-3">
            {fridgeList.map(item => (
              <label key={item} className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-green-600" />
                <span className="ml-2 text-gray-700">{item}</span>
              </label>
            ))}
            <label className="inline-flex items-center">
              <input 
                type="checkbox" 
                className="form-checkbox text-green-600" 
                onChange={(e) => setIsOtherChecked(e.target.checked)} 
              />
              <span className="ml-2 text-gray-700">Other</span>
            </label>
            {isOtherChecked && (
              <input 
                type="text" 
                className="form-input mt-2 block w-full border border-gray-300 rounded-md" 
                placeholder="Enter other ingredients"
                value={otherIngredient}
                onChange={(e) => setOtherIngredient(e.target.value)} 
              />
            )}
          </div>
        </div>

        {/* Type of cuisine */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Which type of cuisine?
          </label>
          <select className="form-select mt-1 block w-full border border-gray-300 rounded-md">
            {cuisineList.map(cuisine => (
              <option key={cuisine} value={cuisine}>{cuisine}</option>
            ))}
          </select>
        </div>

        {/* Cooking time */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            How long should it take?
          </label>
          <input 
            type="range" 
            min="30" 
            max="600" 
            value={cookingTime}
            onChange={(e) => setCookingTime(Number(e.target.value))}
            className="w-full" 
          />
          <div className="flex justify-between text-gray-600 mt-2">
            <span>30 min</span>
            <span>10 hrs</span>
          </div>
          <div className="text-center text-gray-800 mt-2">
            Selected time: {Math.floor(cookingTime / 60)} hrs {cookingTime % 60} min
          </div>
        </div>

        {/* Servings */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Number of servings
          </label>
          <input 
            type="number" 
            min="1" 
            value={servings}
            onChange={(e) => setServings(Number(e.target.value))}
            className="form-input mt-1 block w-full border border-gray-300 rounded-md" 
          />
        </div>

        {/* Experience level */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Experience level
          </label>
          <select className="form-select mt-1 block w-full border border-gray-300 rounded-md">
            {['Beginner', 'Intermediate', 'Expert'].map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        {/* Submit button */}
        <div className="text-center">
          <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
            Create Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
