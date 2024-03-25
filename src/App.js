import React, { useState } from 'react';
import './App.css'; // 引入CSS樣式檔案

function App() {
  const [textInput, setTextInput] = useState({ name: '', message: '' });
  const [comments, setComments] = useState([]);

  const handleTextInputChange = ({ target: { name, value } }) => {
    setTextInput(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setComments(prev => [...prev, textInput]);
    setTextInput({ name: '', message: '' });
  };

  return (
    <div className="app-container">
      <form onSubmit={handleFormSubmit} className="comment-form">
        <input
          name="name"
          value={textInput.name}
          onChange={handleTextInputChange}
          placeholder="Your Name"
          className="input-field"
        />
        <input
          name="message"
          value={textInput.message}
          onChange={handleTextInputChange}
          placeholder="Your Message"
          className="input-field"
        />
        <input type="submit" value="Submit" className="submit-button" />
      </form>
      <div className="comments-section">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment.name}: {comment.message}
          </div>
        ))}
      </div>
    </div>
  );

}

export default App;
