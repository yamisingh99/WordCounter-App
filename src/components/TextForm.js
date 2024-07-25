import React, { useState } from 'react';
import './text.css';

function TextForm() {
  // Initialize the state to store the input value
  const [text, setText] = useState('entered text');
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText('');
  };

  const handleSentenceCaseClick = () => {
    let lowerCase = text.toLowerCase();
    let regex = /([^.!?]+[!?.\d\s]+)(?=(?:[^a-z]*[a-z]){0,1})/g;
    let sentences = lowerCase.match(regex);
    let newText = sentences
      .map((sentence) => {
        return (sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
          ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
          : sentence);
      })
      .join(" ");
    setText(newText);
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  const handleVoClick = () => {
    let countChar = 0;
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i).match(/[aeiouAEIOU]/)) {
        countChar++;
      }
    }
    setCount(countChar);
  };

  const handleCoClick = () => {
    let countCons = 0;
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
        countCons++;
      }
    }
    setCount1(countCons);
  };

  const handleExtraSpaces = () => {
    let words = text.split(' ');
    let joinedWords = words.filter(elem => elem.trim() !== '').join(' ');
    setText(joinedWords);
  };

  const reversed = () => {
    let splitWord = text.split("");
    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    setText(joinedWords);
  };

  const handlecamelCaseonClick = () => {
    let camelCaseText = text
      .split(' ')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
    setText(camelCaseText);
  };

  function textToSpeech() {
    const Speech = new SpeechSynthesisUtterance();
    Speech.lang = 'eng';
    Speech.text = text;
    window.speechSynthesis.speak(Speech);
  }

  return (
    <div className="text-form-container">
      <h2 className="text-form-header">Enter text below to analyze</h2>
      <div className="text-form-group">
        
        <textarea
          className="text-form-textarea"
          id="myBox"
          rows="8"
          placeholdear="Enter text here"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="text-form-buttons">
        <button className="btn" onClick={textToSpeech}>Text to Speech</button>
        <button className="btn" onClick={handleUpClick}>Uppercase</button>
        <button className="btn" onClick={handleDownClick}>Lowercase</button>
        <button className="btn" onClick={handleClearClick}>Clear</button>
        <button className="btn" onClick={handleSentenceCaseClick}>Sentence Case</button>
        <button className="btn" onClick={copyText}>Copy</button>
        <button className="btn" onClick={handleVoClick}>Count Vowels</button>
        <button className="btn" onClick={handleCoClick}>Count Consonants</button>
        <button className="btn" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn" onClick={reversed}>Reverse</button>
        <button className="btn" onClick={handlecamelCaseonClick}>Camel-case</button>
      </div>
      <div className="text-form-stats">
        <h3>You have entered:</h3>
        <p>{count} No. of Vowels</p>
        <p>{count1} No. of Consonants</p>
        <h2>Your text summary here</h2>
        <p>{(text.split(" ").length) - 1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes required to read</p>
        <p>PREVIEW: {text}</p>
      </div>
    </div>
  );
}

export default TextForm;
