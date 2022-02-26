import React from "react";
import "./Footer.css";
import Coffee from './Coffee'

function Footer() {
  return (
    <div className="main-footer">
      <hr />
      <div className="container">
        <div className="flex-container">
  
        <div className="flex-child msg">
          <div className="col">
            <h4>DISCLAIMER: THIS IS UNOFFICIAL COVID TRACKER!!!
            </h4>
            <h4>
            FOLLOW THE OFFICIAL PAGE OF{' '}
            <a
            href="https://www.facebook.com/IlocosNorteOfficial/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,40,0)", textDecoration: "none" }}
            >
            PGIN FB</a>{" "}FOR UPDATED INFO.
            </h4>       
            <h4>
            This site is not affiliated, associated, authorized,  or in any way officially connected with the PGIN
            </h4>
            <br></br>
           <div>
           <a href = "mailto:thenorthtech00@gmail.com?subject = Feedbackbody = Message">
            Send Feedback
            </a>
           </div>
          </div>
        </div>
        <div className="flex-child kopi">
          <Coffee></Coffee>
        </div>
        </div>
        <hr />
        <div className="bot">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} invocid19stat.live | ct: [stackoverflow,youtube,github] ={'>'} copy&amp;paste | Weekend Project
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;