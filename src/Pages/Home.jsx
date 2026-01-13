import React from 'react'
import Header from '../Component/Header';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header/>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
          Smart Utility Tools in One Place
        </h2>
        <p className="text-gray-600 max-w-xl mb-6">
          Translate text instantly into your favourite language and generate secure random strings using modern React hooks.
        </p>
        <Link to="/translator" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
          Get Started
        </Link>
      </section>

      {/* Features */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-indigo-600 mb-2">
              🌍 Text Translator
            </h3>
            <p className="text-gray-600 mb-4">
              Convert English text into multiple international languages instantly using a free translation API.
            </p>
            
            <Link to="/translator" className="text-indigo-600 font-semibold">
              Try Translator →
            </Link>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-indigo-600 mb-2">
              🔐 Random String Generator
            </h3>
            <p className="text-gray-600 mb-4">
              Generate secure random strings with auto-refresh using React hooks like useState, useEffect & useCallback.
            </p>
            <Link to="/random-string" className="text-indigo-600 font-semibold">
              Generate Strings →
            </Link>
          </div>
        </div>
      </section>
      </div>
  );
}

