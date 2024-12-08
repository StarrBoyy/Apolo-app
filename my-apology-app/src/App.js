import React, { useState } from "react";

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50 p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-pink-500 mb-6 text-center">
        For you, Maissa ❤️
      </h1>
      <button
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg text-lg md:text-xl transition duration-300"
        onClick={handleClick}
      >
        Click me, hon
      </button>
      {showMessage && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg max-w-2xl text-center">
          <p className="text-lg md:text-xl text-gray-700">
            Dear wifey, I just want to say I'm sorry from the bottom of my
            heart. I never meant to hurt you, and I realize how much you mean to
            me. You deserve all the happiness in the world, and I hope we can
            move forward stronger together. Inshallah, naarsou bbaathna and we
            live a very peaceful life as a whole family. Nhebk barcha ya rouh
            9albi , i love you with every blood drop flooding my heart rabi
            yfathlek lia haboubti❤️❤️❤️
          </p>
          <p>
            ps: naarch kifeh jetni fekrt naaml app lik ama i felt like it :p
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
