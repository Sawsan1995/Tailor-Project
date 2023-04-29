import React from 'react';
import "../../../node_modules/video-react/dist/video-react.css"; // import css
import VideoBg from '../../imgs/video-bg.png';
import { Player, BigPlayButton } from 'video-react';
import'./Video.css';

export default props => {
  return (
    <Player 
      playsInline
      poster={VideoBg }
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"

    >
        <BigPlayButton position="center" />
    </Player>    
  );
};