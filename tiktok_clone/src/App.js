import axios from "axios";
import React, { useEffect } from "react";
import "./App.css";
import Video from "./Video/Video";

function App() {

const [videos, setVideos] = useState([]);

useEffect(() => {
  async function fetchPosts() {
    const response = await axios.get("/v2/posts");
    setVideos(response.data);

    return response;
  }

  fetchPosts();
}, []);


  return (
    <div className="app">
      <div className="appVideos">

        {videos.map(({url, channel, description, song, likes, messages, shares}) => (
          <Video 
            url={url}
            channel={channel}
            song={song}
            likes={likes}
            messages={messages}
            description={description}
            shares={shares}
          />
        ))}

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
