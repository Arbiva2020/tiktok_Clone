import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooterText">
        <h3>hello</h3>
        <p>this is text</p>
        <div className="videoFooterTicker">
          <MusicNoteIcon className="videoFooterIcon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>i am a song</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img className="videoFooterRecord"
      src="http://static.thenounproject.com/png/934821-200.png"
      alt=""
      />
    </div>
  );
}

export default VideoFooter;
