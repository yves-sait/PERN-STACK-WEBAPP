import React from 'react';

import {
    EmailShareButton,
    FacebookShareButton,
    RedditShareButton,
    TwitterShareButton,
    ViberShareButton,
    WhatsappShareButton,
    FacebookMessengerShareButton

  } from "react-share";
import {
    EmailIcon,
    FacebookIcon,
    RedditIcon,
    TwitterIcon,
    ViberIcon,
    WhatsappIcon,
    FacebookMessengerIcon
  } from "react-share";

import "./Share.css";

  const Share = () =>{

    const shareUrl = 'http://www.incovid19stats.live';


    return(
        
        <div className="sharecontainer">
        <div className="share">
            <div className="sharenetwork">
            <FacebookShareButton
                url={shareUrl}
                className="sharenetwork_share-button"
            
            >
                <FacebookIcon size={28} round={true}/>
            </FacebookShareButton>
            </div>
            <div className="sharenetwork">

            <FacebookMessengerShareButton
            url={shareUrl}
            appId="521270401588372"
            className="sharenetwork_share-button"
          >
            <FacebookMessengerIcon size={28} round />
          </FacebookMessengerShareButton>
            </div>
            <div className="sharenetwork">
            <ViberShareButton
                 url={shareUrl}    
                 className="sharenetwork_share-button"
            >
                <ViberIcon size={28} round={true}/>
            </ViberShareButton>
            </div>
            <div className="sharenetwork">
            <WhatsappShareButton
                 url={shareUrl}
                 className="sharenetwork_share-button"
            >
                <WhatsappIcon size={28} round={true}/>      

            </WhatsappShareButton>
            </div>
            <div className="sharenetwork">
            <TwitterShareButton
                 url={shareUrl}
                 className="sharenetwork_share-button"
            >
                <TwitterIcon size={28} round={true}/>

            </TwitterShareButton>
            </div>
            <div className="sharenetwork">
            <EmailShareButton
            
                url={shareUrl}>
            <EmailIcon size={28} round={true}/>

            </EmailShareButton>
            </div>
            <div className="sharenetwork">
            <RedditShareButton
            
                url={shareUrl}
                className="sharenetwork_share-button"
            
            >
                <RedditIcon size={28} round={true}/>

            </RedditShareButton>
            </div>
        </div>
        </div>
    );


}

export default Share;