import React, { useCallback } from "react";
import Header from "../Component/Header";
import { useState } from "react";
export default function RandomString() {
  const [length, setLength] = useState(4);
  const [randomString, setRandomString] = useState("");
  let generateString = useCallback(()=>{
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  setRandomString(result);
  },[length]);
  let copyString=()=>{
      navigator.clipboard.writeText(randomString);
     }
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-10">
          <h1 className="text-center text-4xl font-bold mb-10 text-indigo-600">
            Random String Generator
          </h1>

          {/* Output + Copy */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              readOnly
              value={randomString}
              className="w-full md:flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            onClick={copyString}>
              Copy
            </button>
          </div>

          {/* Length Field */}
          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              String Length
            </label>

            <input
              type="number"
              min={4}
              max={20}
              defaultValue={10}
              value={length}
              onChange={(event)=>setLength(event.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Generate Button */}
          <div className="text-center">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            onClick={generateString}
            >
              Generate String
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
