import { motion } from "framer-motion";
import { useState } from "react";
import spider from "../images/spiderman-upsidedown.png";

const SpiderMan = () => {
  const [showHeart, setShowHeart] = useState(false);
  const [showSpeech, setShowSpeech] = useState(false);

  const handleSpiderComplete = () => {
    setShowHeart(true);

    setTimeout(() => {
      setShowSpeech(true);
    }, 700);
  };

  return (
    <div className="spider-position">
      <motion.div
        className="spider-container"
        initial={{ y: "-70vh" }}
        animate={{ y: 0 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
        onAnimationComplete={handleSpiderComplete}
      >
        {/* Spider-Man */}
        <img src={spider} alt="Spider-Man" className="spider" />

        {/* Heart */}
        {showHeart && (
          <motion.div
            className="heart"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ❤️
          </motion.div>
        )}

        {/* Speech Balloon */}
        {showSpeech && (
          <motion.div
            className="speech-balloon"
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "backOut",
            }}
          >
            This heart is for you ❤️
            <div className="speech-tail" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SpiderMan;
