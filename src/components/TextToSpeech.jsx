import React from "react";

const TextToSpeech = ({ text, onFinish }) => {
  const speak = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => {
        if (onFinish) onFinish(); // Notify parent when speech is finished
      };
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-Speech is not supported in this browser.");
    }
  };

  React.useEffect(() => {
    speak();
  }, [text]); // Speak whenever the text changes

  return null; // This component has no visible UI
};

export default TextToSpeech;
