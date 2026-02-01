import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setPlayMusic(true);
    setNoCount((prev) => prev + 1);
  };

  const handleYesClick = () => {
    setPlayMusic(true);
    setYesPressed(true);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No 💔",
      "Are you sure? 😅",
      "Thoda soch lo na…",
      "Really? Pura pakka?",
      "Picture abhi baaki hai, mere dost 🎬",
      "Ek baar phir se dil se socho ❤️",
      "Itna bhi gussa acha nahi hota 😌",
      "Yeh 'No' thoda jaldi nahi ho gaya?",
      "SRK kehte hain: Dil se sochna chahiye 🫶",
      "Bas ek chance… filmy wala 😇",
      "Kuch kuch hota hai, tum nahi samjhogi 😉",
      "Palat… palat… palat! 😆",
      "Aise kaise 'No' bol diya? 😭",
      "Yeh dil hai… koi switch nahi 💔",
      "Final answer? Interval aa jayega 🎥",
      "Last chance before dramatic music 🎻",
      "Plsss? Varna Devdas ban jaunga 🍷😭",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      
      {/* 🎵 Background Music */}
      {playMusic && (
        <iframe
          width="0"
          height="0"
          src="https://www.youtube.com/embed/F5YmLkh8nV4?autoplay=1&loop=1&playlist=F5YmLkh8nV4"
          title="Valentine Music"
          frameBorder="0"
          allow="autoplay"
        />
      )}

      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="kiss"
          />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Ok Yayyyyy!!! 💖
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
            alt="love"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
            alt="love"
          />

          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="bear"
          />

          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Would you like to go on a date with me? 💘
          </h1>

          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4 transition-all"
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>

            <button
              onClick={handleNoClick}
              className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4 transition-all"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/Xeven777/valentine"
      target="_blank"
      rel="noreferrer"
    >
      Made with ❤️
    </a>
  );
};
