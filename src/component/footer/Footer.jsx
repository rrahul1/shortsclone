import React from "react";

import "./Footer.css";

export default function Footer({ channel, song, likes, comment, shares }) {
   return (
      <div className="video-footer">
         <div className="video-text">
            <h3>
               {channel} . ({song})
            </h3>
         </div>
         {/*  */}
         <div className="footer-buttons">
            <div className="flex-box">
               {/* <Favorite /> */}
               {likes}
            </div>
            {/*  */}
            <div className="flex-box">
               {/* <Comment /> */}
               {comment}
            </div>
            {/*  */}
            <div className="flex-box">
               {/* <Send /> */}
               {shares}
            </div>
         </div>
      </div>
   );
}
