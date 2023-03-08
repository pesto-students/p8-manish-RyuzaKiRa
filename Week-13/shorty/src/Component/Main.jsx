import React, { useState, useRef } from "react";
import debounce from 'lodash/debounce';
import ShortenUrl from "./ShortenUrl";

const Main = () => {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const handleChange = (event) => {
        setUrl(event.target.value);
    }
    const shortOnClick = async () => {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
            .then((response)=> {return response.json()});
        const result = response.result.full_short_link;
        setShortUrl(result);
    }
    const debouncedUpdate = useRef(debounce(handleChange, 1000));
    return (
        <>
            <div className="center">
                <h1>Shorty: Link Shortner</h1>
            </div>
            <div className="center">
                <input className="urlBox"
                    autoFocus={true}
                    type="text"
                    placeholder="Enter Url"
                    onChange={debouncedUpdate.current}
                />
                <button className="shortButton" onClick={shortOnClick}>Shorten</button>
            </div>
            <div>
            <div className="center flexOnly">
                <ShortenUrl shortUrl={shortUrl} />
            </div>
            </div>
        </>
    );
};

export default Main;