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
    }, 1000);
  };
  return (
    <motion.div
      className="spider-container"
      initial={{ y: "-70vh" }}
      animate={{ y: 0 }}
      transition={{
        duration: 3,
        ease: "easeInOut",
      }}
      // This runs AFTER Spider-Man finishes going down
      onAnimationComplete={handleSpiderComplete}
    >
      {/* Spider-Man */}
      <img src={spider} alt="Spider-Man" />

      {/* Heart */}
      {showHeart && (
        <motion.div
          className="heart"
          animate={{
            scale: [1, 1.2, 1],
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
            y: 20,
          }}
          animate={{
            scale: [0, 1.15, 0.95, 1],
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          This heart is for you
          <div className="speech-tail" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default SpiderMan;
