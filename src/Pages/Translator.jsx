import { useEffect, useState } from 'react';
import axios from 'axios';
import Languages from '../Component/Languages';
import Header from '../Component/Header';
function Translator() {
  let [text, setText] = useState('');
  let [storeLanguage, setStoreLanguage] = useState([]);
  let [selectedLanguage, setSelectedLanguage] = useState('');
  let [translatedText, setTranslatedText] = useState('');
  let [loading, setLoading] = useState(false);
  let translationFunc = () => {
  if (text !== "" && selectedLanguage !== "") {
    setLoading(true);
    axios.post(
      "http://localhost:8000/translate",
      new URLSearchParams({
        q: text,
        source: "en",
        target: selectedLanguage,
        format: "text"
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
    .then((res) => {
      setTranslatedText(res.data.translatedText);
      console.log(res.data);
      setText('');
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
    });
  }
  
};

  let storeLanguageFun=()=>{
    axios.get('http://localhost:8000/languages')
    .then((res)=>res.data)
    .then((finalRes)=>{
      setStoreLanguage(finalRes);
      console.log(finalRes);
    })
    .catch((err) => {});
  }
  useEffect(() => {
    storeLanguageFun();
  }, [])
  
    return (
  <div className="min-h-screen bg-gray-100">
  <Header />

  <div className="flex items-center justify-center px-4 py-16">
    <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
      <h1 className="text-center text-4xl font-bold mb-8 text-indigo-600">
        Text Translator
      </h1>

      <label className="block text-lg font-medium text-gray-700 mb-2">
        Enter Text to Translate
      </label>

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter text here..."
          className="w-full md:flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <select
          className="w-full md:w-40 rounded-lg border border-gray-300 px-3 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <Languages storeLanguage={storeLanguage} />
        </select>

        <button
          onClick={translationFunc}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition whitespace-nowrap"
        >
          Translate
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Translated Output
        </h2>
        <div className="min-h-[120px] bg-gray-100 rounded-lg p-4 text-gray-800 border border-gray-300">
          {translatedText || (
            <span className="text-gray-400">
              Translated text will appear here...
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

);


}

export default Translator;
