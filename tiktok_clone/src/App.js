import React from "react";
import "./App.css";
import Video from "./Video/Video";

function App() {
  return (
    <div className="app">
      <div className="appVideos">
        <Video 
        url="https://www.youtube.com/embed/-Ti1tjYmg2s"
        channel="aaaaaaaa"
        description="bbbbbbbbb"
        song="ccccccccc"
        likes={111}
        messages={2222}
        shares={3333}/>
        <Video 
        url="https://www.youtube.com/embed/RpIrmzWhPAg"
        channel="aaaaaaaa"
        description="bbbbbbbbb"
        song="ccccccccc"
        likes={111}
        messages={2222}
        shares={3333}/>
        <Video />
      </div>
    </div>
  );
}

export default App;
