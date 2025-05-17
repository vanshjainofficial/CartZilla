import React, { useEffect, useState } from "react";
import "./Product.css";


const phrases = [
  "🎧Latest Products",
  "🔥 Deals you can't miss!",
  "⏳ Hurry, time is ticking!",
  "💥 Flash prices, flash savings!",
  "🚀 Shop now, save big!",
];

const TypingSparkle = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {

        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentPhrase.length) {

          setTimeout(() => setIsDeleting(true), 1000);
          setTypingSpeed(0);
        } else {
          setTypingSpeed(150);
        }
      } else {

        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {

          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
          setTypingSpeed(500);
        } else {
          setTypingSpeed(75);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, typingSpeed]);

  return (
    <h2 className="typing-text">
      {text}
      <span className="cursor"></span>
    </h2>
  );
};

export default TypingSparkle;