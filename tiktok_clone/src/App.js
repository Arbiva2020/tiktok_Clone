import React from "react";
import "./App.css";
import Video from "./Video/Video";

function App() {
  return (
    <div className="app">
      <div className="appVideos">
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
