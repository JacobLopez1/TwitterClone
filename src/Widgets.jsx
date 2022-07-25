import React from 'react';
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed"

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder='Search Twitter' />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1513186824298061826"} />
                <TwitterTweetEmbed tweetId={"1507598723953561605"} />

                <TwitterShareButton options={{ text: 'react is cool ig', via:'jlopez'}}/>
            </div>
        </div>
    );
}

export default Widgets;
