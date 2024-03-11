// accessibility mode
import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import './App.css'; // Import the CSS file

function Page1({ onPageChange }) {

      const defaultText = "Your predefined text here"; // Define your default text here
      const { speak } = useSpeechSynthesis();
      const [text, setText] = useState(defaultText); // Initialize text state with defaultText
    
      const handleOnClick = () => {
        speak({ text: defaultText });
      };
    
      return (
        <div className="container"> {/* Apply the 'container' class */}
          <h1 className="heading">Text to Speech Converter in React</h1> {/* Apply the 'heading' class */}
          <textarea
            className="textAreaStyle" // Apply the 'textAreaStyle' class
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text here..."
          />
          <button className="buttonStyle" onClick={handleOnClick}>Listen</button> {/* Apply the 'buttonStyle' class */}
        </div>
      );
    }


export default Page1;
