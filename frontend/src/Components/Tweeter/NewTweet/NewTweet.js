import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './newTweet.css'

export default function NewTweet({ onAdd, definitions }) {
  const [currentTweet, setCurrentTweet] = useState({ id: "", value: "" });
  const [tweetable, setTweetable] = useState(false);

  useEffect(() => {
    const textLength = currentTweet.value.trim().length;

    if (textLength <= 0 || textLength > definitions.maxLength) {
      setTweetable(false);
      return;
    }
    setTweetable(true);

    const handleKeyDown = event => {
      const key = event.key;
      const ctrlKey = event.ctrlKey;
      if (key === "Enter" && ctrlKey && tweetable) {
        handleSendClick(event);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [currentTweet.value, definitions, tweetable]);

  const createNewTweet = () => {
    setTweetable(false);
    setCurrentTweet(c => { return { id: uuidv4(), value: "" } });
  }

  const showCharactersLeft = () => {
    const chars = definitions.maxLength - currentTweet.value.length;
    let color = "";
    switch (true) {
      case (chars <= 0):
        color = "red-text";
        break;
      case (chars <= definitions.alertLength):
        color = "orange-text";
        break;
      default:
        color = "green-text";
        break;
    }
    return <span className={color}>{`${chars} Characters left`}</span>
  }

  const handleTextChange = (event) => {
    const text = event.target.value;
    setCurrentTweet({ ...currentTweet, value: text });
  }

  const handleSendClick = (event) => {
    onAdd(currentTweet);
    createNewTweet();
    event.preventDefault();
  }

  return (
    <div className="newTweet boxShadow">
      <div className="input-field">
        <textarea
          placeholder="What's happening?"
          id="inputNew"
          type="text"
          className="materialize-textarea"
          onChange={handleTextChange}
          value={currentTweet.value}
          autoFocus
        />
      </div>
      <div className="flexRow">
        {showCharactersLeft()}
        <button
          type="submit"
          className="btn waves-effect waves-light blue lighten-1"
          disabled={!tweetable}
          onClick={handleSendClick}
        >
          Send
        <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
  )
}
