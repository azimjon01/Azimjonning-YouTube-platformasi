import { Mic, X } from "lucide-react";
import { useState } from "react";

const VoiceSearch = () => {
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    setIsListening(true);
    // Simulating voice recognition
    setTimeout(() => {
      setIsListening(false);
    }, 5000);
  };

  const stopListening = () => {
    setIsListening(false);
  };

  return (
    <div className="relative">
      <button
        onClick={startListening}
        className="flex flex-shrink-0 hover:bg-gray-100 md:gap-2 p-2 rounded-md"
      >
        <Mic />
      </button>
      {isListening && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-900 p-10 rounded-xl shadow-xl text-center">
            <div className="relative flex justify-center items-center mb-4">
              <div className="w-16 h-16 bg-red-500 rounded-full animate-ping absolute"></div>
              <div className="w-16 h-16 bg-red-500 rounded-full relative flex items-center justify-center">
                <Mic size={32} className="text-white" />
              </div>
            </div>
            <p className="text-lg font-semibold dark:text-white">
              Listening...
            </p>
            <button
              onClick={stopListening}
              className="flex mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition"
            >
              <X size={20} /> Stop
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceSearch;
