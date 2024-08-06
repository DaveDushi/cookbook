'use client'
import React, { useState } from 'react';

const cuisineList = [ 
    'Israeli', 'Mexican', 'Chinese', 'Texas Ranch', 'Italian', 'Indian', 'Thai', 
    'Japanese', 'French', 'Greek', 'Mediterranean', 'Spanish', 'Korean', 
    'Vietnamese', 'Middle Eastern', 'Caribbean', 'American', 'African', 'German', 
    'Russian', 'Brazilian', 'Turkish'
  ];
  
const mealList = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'];

const skillList = ['Beginner', 'Intermediate', 'Expert'];

const RecipeForm: React.FC = () => {
  const [cookingTime, setCookingTime] = useState(30);
  const [servings, setServings] = useState(2);
  const [email, setEmail] = useState('');
  const [ingredients, setIngredients] = useState<string[]>(['']);
  const [marketingEmail, setMarketingEmail] = useState<boolean>(true);

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const removeIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };


  const handleSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    alert('Form submitted')
  };
  

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission on Enter key press
    }
  };


  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 mt-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Your Perfect Recipe</h2>
      
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        {/* Meal type */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            What are you making?
          </label>
          <select className="form-select text-md mt-1 block border border-gray-300 rounded-md">
            {mealList.map(meal => (
              <option key={meal} value={meal}>{meal}</option>
            ))}
          </select>
        </div>
        
        {/* What's in your fridge/closet */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Which ingredients/spices would you like to use?
          </label>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex items-center mb-2">
              <input 
                type="text" 
                className="form-input mt-1 block w-1/4 border border-gray-300 rounded-md" 
                placeholder="Enter an ingredient"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
              />
              <button 
                type="button" 
                onClick={() => removeIngredient(index)} 
                className="ml-2 text-lg text-red-600 hover:text-red-800"
              >
                ×
              </button>
            </div>
          ))}
          <button 
            type="button" 
            onClick={addIngredient} 
            className="bg-green-500 text-white text-sm px-3 py-2 rounded-full hover:bg-green-600 transition duration-300"
          >
            Add Ingredient
          </button>
        </div>

        {/* Type of cuisine */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Which type of cuisine?
          </label>
          <select className="form-select text-md mt-1 block border border-gray-300 rounded-md">
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
            className="form-input mt-1 block border border-gray-300 rounded-md" 
          />
        </div>

        {/* Experience level */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Experience level
          </label>
          <select className="form-select mt-1 block border border-gray-300 rounded-md">
            {skillList.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Enter your email adress:
          </label>
          <input 
            type="text" 
            value={email}
            required
            placeholder='example@example.com'
            onChange={(e) => setEmail(e.target.value)}
            className="form-input mt-1 block border border-gray-300 rounded-md" 
          />
          <label>
              <input
                type="checkbox"
                name="marketingEmail"
                checked={marketingEmail}
                onChange={(e) => setMarketingEmail(e.target.checked)}
                className="mr-2 mt-3"
              />
              Would you like to receive marketing emails from us?
            </label>
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
