import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mt-7 flex flex-col md:flex-row items-center justify-between bg-gray-50 p-12 md:p-16">
      <div className="md:mr-10 md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-5xl text-center font-extrabold text-gray-800 mb-6">
          Welcome to CookedUp
        </h1>
        <h2 className="text-4xl text-center font-extrabold text-gray-800 mb-6" >Your Personal Chef</h2>
        <p className="text-xl text-gray-600 mb-8">
          Discover a world of culinary delights at your fingertips. With our app, you can generate
          personalized recipes tailored to your tastes and preferences. Start creating your own delicious
          dishes today!
        </p>
        <a href="/recipeform" className="bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 transition duration-300">
          Start Generating a Recipe
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/heroImage.jpeg"
          alt="Cooking"
          className="rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
}
