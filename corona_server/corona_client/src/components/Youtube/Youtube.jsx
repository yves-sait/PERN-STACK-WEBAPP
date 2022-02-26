import React from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
// import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import "./Youtube.css"


const Youtube = () => {
    return(
    <div className="youtubecontainer">
      <LiteYouTubeEmbed
         id="e2DVA8fFir0"
         title=" Ilocos Norte Racing Bar Chart Active Cases Aug2021"
         activeClass="lyt-activated" // Default as "lyt-activated", gives control to wrapper once clicked
         iframeClass="" // Default none, gives control to add a class to iframe element itself
         playerClass="lty-playbtn" // Default as "lty-playbtn" to control player button styles
         wrapperClass="yt-lite" // Default as "yt-lite" for the div wrapping the area, it is the most important class and needs extra attention, please refer to LiteYouTubeEmbed.css for a reference.
      />
    </div>
    );
}

export default Youtube;