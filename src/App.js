import React from "react";
import Videos from "./component/Video";
import vid1 from "./videos/vid1.mp4";
import vid2 from "./videos/vid2.mp4";
import vid3 from "./videos/vid3.mp4";
import vid4 from "./videos/vid4.mp4";
import "./App.css";

function App() {
   const ytVideos = [
      { id: 1, title: "video1", url: vid1, likes: 0 },
      { id: 2, title: "video2", url: vid2, likes: 0 },
      { id: 3, title: "video3", url: vid3, likes: 0 },
      { id: 4, title: "video4", url: vid4, likes: 0 },
   ];

   return (
      <div className="app">
         Youtube Shorts
         <div className="app__videos">
            {ytVideos.map((vid) => (
               <Videos
                  id={vid._id}
                  url={vid.url}
                  like={vid.likes}
                  title={vid.title}
               />
            ))}
         </div>
      </div>
   );
}

export default App;
