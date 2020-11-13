import React, { Component } from 'react';
import './../css/component/playstore.css';
import { FaGooglePlay, FaApple } from "react-icons/fa";

class PlayStore extends Component {
    
    render() {
        return (
            <div className="play-store">
                <a href="/" className="custom-btn d-inline-flex align-items-center"><FaGooglePlay /><p>Available on<span>Google Play</span></p></a>
                <a href="/" className="custom-btn d-inline-flex align-items-center"><FaApple /><p>Available on<span>the App Store</span></p></a>
            </div>
        )
    }
}

export default PlayStore;