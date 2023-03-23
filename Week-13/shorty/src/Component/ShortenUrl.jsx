import React from "react";
import { useState } from "react";

const ShortenUrl = (props) => {
    const [copy, setCopy] = useState('Copy');
    const onCopy = () => {
        navigator.clipboard.writeText(props.shortUrl)
        setCopy('Copied!');
        setTimeout(()=>{setCopy('Copy')}, 1500);
    }
    if (props.shortUrl.length < 1)
            return null;
    return (
        <>
            <div className="shortenedUrlBox">
                    <p>{props.shortUrl}</p>
            </div>
            <button className="copyButton" onClick={onCopy}>{copy}</button>
        </>
    );
};

export default ShortenUrl;