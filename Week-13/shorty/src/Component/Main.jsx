import React, { useState, useCallback } from "react";
import { TailSpin } from  'react-loader-spinner';
import debounce from 'lodash/debounce';
import ShortenUrl from "./ShortenUrl";

const Main = () => {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [isValidUrl, setisValidUrl] = useState(true);
    const [isLoading, setLoading] = useState(false);
    const handleChange = (event) => {
        setisValidUrl(true);
        setUrl(event.target.value);
    }
    const shortOnClick = async () => {
        setLoading(true);
        setShortUrl('');
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
            .then((response)=> {
                if (response.ok === false) {
                    setisValidUrl(false);
                    setLoading(false);
                }
                else {
                    setLoading(false);
                    setisValidUrl(true);
                }
                return response.json();
            });
        const result = response.ok? response.result.full_short_link : '';
        setShortUrl(result);
    }
    const debouncedUpdate = useCallback(debounce(handleChange, 1000),[]);
    return (
        <>
            <div className="shortHeader">
                <h1>Shorten your link!</h1>
            </div>
            <div className="center shortHeight">
                <input className={`urlBox ${isValidUrl? 'validUrl' : 'inValidUrl'}`}
                    autoFocus={true}
                    type="text"
                    placeholder="Enter Url"
                    onChange={debouncedUpdate}
                />
                <button className="shortButton" onClick={shortOnClick}>Shorten</button>
            </div>
            <div>
            <TailSpin
              height="40"
              width="40"
              color="white"
              ariaLabel="tail-spin-loading"
              radius="2"
              wrapperClass="center"
              visible={isLoading}
            />
            <div className="center flexOnly">
                <ShortenUrl shortUrl={shortUrl} />
            </div>
            </div>
        </>
    );
};

export default Main;