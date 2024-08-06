"use client";

import { useRouter } from 'next/navigation';

export default function ThankYou() {
  const router = useRouter();

  const handleGenerateAnother = () => {
    router.push('/recipeform');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg text-center mb-40">
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="text-lg mb-6">
          Thank you for using CookUp. An email with your recipe has been sent to your email address.</p>
        <button
          onClick={handleGenerateAnother}
          className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300"
        >
          Generate Another
        </button>
      </div>
    </div>
  );
}
