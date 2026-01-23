import { useState, useEffect } from 'react';

const Typewriter = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDelay = 1500,
  className = "",
  cursorClassName = ""
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;
    const currentFullText = texts[index % texts.length];

    if (isDeleting) {
      // Deleting characters
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    } else {
      // Typing characters
      if (displayedText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, wait before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index, texts, typingSpeed, deletingSpeed, pauseDelay]);

  return (
    <span className={className}>
      {displayedText}
      <span className={`inline-block w-[2px] h-[0.8em] ml-1 bg-white animate-pulse ${cursorClassName}`}></span>
    </span>
  );
};

export default Typewriter;
