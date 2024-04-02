import React, { useState } from 'react';
import './text.css'

function TextForm() {
  // Initialize the state to store the input value
  const [text, setText] = useState('entered text');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText); // Corrected the text here
  }

  const handleOnChange = (event) => {
    console.log("on change clicked");
    setText(event.target.value); // Removed unnecessary concatenation
  }
  const handleDownClick = (event) => {
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = (event) => {
    let textNew = " ";
    setText(textNew);
  }

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
  }
    ;
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  // Function to count Vowels:
  const handleVoClick = () => {
    let countChar = 0;
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i).match(/[aeiouAEIOU]/)) {
        countChar++;
      }
    }
    setCount(countChar);
  };

  // Function to count Consonants:
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
    let joinedWords = '';
    // console.log(words);
    words.forEach((elem) => {
      if (elem[0] !== undefined) {
        joinedWords += elem + " ";
        console.log(joinedWords);
      }
    })
    setText(joinedWords);
  };

  const reversed = () => {
    let splitWord = text.split("");

    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords

    setText(newText);
  };
  const handlecamelCaseonClick = () => {
    let camelCaseText = text
      .split(' ')
      .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0)
          .toUpperCase() + word.slice(1)
            .toLowerCase();
      })
      .join(' ');
    setText(camelCaseText);
  };
  function textToSpeech() {
    const Speech = new SpeechSynthesisUtterance();
    const message = document.getElementById("myBox").value;
    Speech.lang = 'eng';
    Speech.text = message;
    window.speechSynthesis.speak(Speech);
  }
  const handleLightTheme = () => {
    document.querySelector('body').style.backgroundColor = "white";
    document.querySelector('body').style.color = "black";
  }
  const handleDarkTheme = () => {
    document.querySelector('body').style.backgroundColor = "black";
    document.querySelector('body').style.color = "white";
  }

  return (
    <div>
      <h2>Enter text below to analyze</h2>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Text:</label> {/* Corrected 'for' attribute and added a label text */}
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          placeholder="Enter text here"
          value={text}
          onChange={handleOnChange} // Corrected 'onchange' to 'onChange'
        ></textarea>
      </div>
      <button id="text-speech" className="btn btn-primary mx-1" onClick={textToSpeech}>
        text to speech
      </button>
      <button type="button" className="btn btn-primary cursor-pointer" onClick={handleUpClick}> Uppercase</button> {/* Corrected button type and text */}
      <button type="button" className="btn btn-primary cursor-pointer mx-2" onClick={handleDownClick}>lowercase</button>

      <button type="button" className="btn btn-primary cursor-pointer mx-2" onClick={handleClearClick}>Clear</button>
      <button type="button" className="btn btn-primary cursor-pointer mx-2" onClick={handleSentenceCaseClick}>Sentence case</button>
      <button type="button" className="btn btn-primary cursor-pointer mx-2" onClick={copyText}>Copy</button>
      <button className="btn btn-primary mx-1" onClick={handleVoClick}>
        Count no. of Vowels
      </button>

      <button className="btn btn-primary mx-1" onClick={handleCoClick}>
        Count no. of Consonants
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        remove extra spaces
      </button>
      <button className="btn btn-primary mx-1" onClick={reversed}>
        reverse
      </button>
      <button className="btn btn-primary mx-1" onClick={handlecamelCaseonClick}>
        Camel-case
      </button>
     
      <button className="btn btn-primary mx-1" onClick={handleLightTheme}>
        light mode
      </button>
      <button className="btn btn-primary mx-1" onClick={handleDarkTheme}>
        dark mode
      </button>
      <h3>You have entered:</h3>
      <p>{count} No. of Vowels</p>
      <p>{count1} No. of Consonants</p>
      <h2>Your text summary here</h2>
      <p>{(text.split(" ").length) - 1} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes required to read</p>
      <p>PREVIEW: {text}</p>
    </div>

  );
}

export default TextForm;
