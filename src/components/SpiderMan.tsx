import { motion } from "framer-motion";
import { useState } from "react";
import spider from "../images/spiderman-upsidedown.png";

const SpiderMan = () => {
  const [showHeart, setShowHeart] = useState(false);

  return (
    <motion.div
      className="spider-container"
      initial={{ y: -700 }}
      animate={{ y: 0 }}
      transition={{
        duration: 3,
        ease: "easeInOut",
      }}
      // This runs AFTER Spider-Man finishes going down
      onAnimationComplete={() => {
        setShowHeart(true);
      }}
    >
      {/* Spider-Man */}
      <img src={spider} alt="Spider-Man" />

      {/* Heart */}
      {showHeart && (
        <motion.div
          className="heart"
          // Heart starts small and invisible
          initial={{
            scale: 0,
            opacity: 0,
          }}
          // Heart appears, then starts pumping
          animate={{
            scale: [0, 1.2, 1, 1.15, 1],
            opacity: 1,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ❤️
        </motion.div>
      )}
    </motion.div>
  );
};

export default SpiderMan;
