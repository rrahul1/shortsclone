import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import "./Video.css";

function Videos({ id, url, like, title }) {
   const [setPlaying] = useState(false);
   const [vidLike, setVidLike] = useState(false);

   const videoRef = useRef(null);
   const handleVideoPress = () => {
      if (videoRef.current) {
         const isPaused = videoRef.current.getInternalPlayer().paused;
         setPlaying(isPaused);
         if (isPaused) {
            videoRef.current.getInternalPlayer().play();
         } else {
            videoRef.current.getInternalPlayer().pause();
         }
      }
   };

   const handleVidLike = () => {
      setVidLike((prev) => !prev);
   };

   return (
      <div className="video">
         <ReactPlayer
            id={id}
            height="80vh"
            className="video__player"
            onClick={handleVideoPress}
            loop
            ref={videoRef}
            url={url}
            playing={true}
         />
         <div className="shortsContainer">
            <div className="shortsVideoSideIcons">
               <div className="shortsVideoSideIcon">
                  <button className="likeBtn" onClick={handleVidLike}>
                     {vidLike ? "❤️" : "Like"}
                  </button>
               </div>
            </div>
            <div className="shortsBottom">
               <div className="shortsDesc">
                  <p className="title">{title}</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Videos;
