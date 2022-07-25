import { Avatar, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import db from "./Firebase";
import "./TweetBox.css";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = e => {
    e.preventDefault();
    
    db.collection('posts').add({
        displayName: 'Jacob Lopez',
        username: "jlopez",
        verified: true,
        avatar: "",
        image: tweetImage,
        text: tweetMessage,
    })

    setTweetMessage('');
    setTweetImage('');
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={e => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
