import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import spider from "../images/spiderman-upsidedown.png";
import music from "../music/flower.mp3";
import lyrics from "./lyrics";

const SpiderMan = () => {
  const [showHeart, setShowHeart] = useState(false);
  const [showSpeech, setShowSpeech] = useState(false);
  const [currentLyric, setCurrentLyric] = useState("");

  const [introMessage, setIntroMessage] = useState("");

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ==========================================
  // CREATE AUDIO
  // ==========================================

  useEffect(() => {
    audioRef.current = new Audio(music);

    audioRef.current.preload = "auto";

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, []);

  // ==========================================
  // UPDATE LYRICS WHILE MUSIC PLAYS
  // ==========================================

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateLyric = () => {
      const currentTime = audio.currentTime;

      let lyric = "";

      for (let i = 0; i < lyrics.length; i++) {
        if (currentTime >= lyrics[i].time) {
          lyric = lyrics[i].text;
        } else {
          break;
        }
      }

      setCurrentLyric(lyric);
    };

    audio.addEventListener("timeupdate", updateLyric);

    return () => {
      audio.removeEventListener("timeupdate", updateLyric);
    };
  }, []);

  // ==========================================
  // SPIDER-MAN FINISHED COMING DOWN
  // ==========================================

  const handleSpiderComplete = () => {
    setShowHeart(true);
    setShowSpeech(true);
    setIntroMessage("Hi! I'm Spider-Man, I'm going to sing a song for you 🎤");

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;

        audioRef.current
          .play()
          .catch((error) => {
            console.log("Audio could not play:", error);
          });
      }

      setIntroMessage("");

    }, 2500);
  };

  // ==========================================
  // CURRENT MESSAGE
  // ==========================================

  const displayedMessage =
    introMessage || currentLyric;

  return (
    <div className="spider-position">
      <motion.div
        className="spider-container"

        initial={{
          y: "-70vh",
        }}

        animate={{
          y: 0,
        }}

        transition={{
          delay: 1,
          duration: 3,
          ease: "easeInOut",
        }}

        onAnimationComplete={handleSpiderComplete}
      >
        <img
          src={spider}
          alt="Spider-Man"
          className="spider"
        />

        {showHeart && (
          <motion.div
            className="heart"

            initial={{
              scale: 0,
              opacity: 0,
            }}

            animate={{
              scale: [1, 1.15, 1],
              opacity: 1,
            }}

            transition={{
              opacity: {
                duration: 0.3,
              },

              scale: {
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            ❤️
          </motion.div>
        )}

        {showSpeech && displayedMessage && (
          <motion.div
            key={displayedMessage}
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
              duration: 0.4,
              ease: "backOut",
            }}
          >
            {displayedMessage}

            <div className="speech-tail" />
          </motion.div>
        )}

      </motion.div>

    </div>
  );
};

export default SpiderMan;