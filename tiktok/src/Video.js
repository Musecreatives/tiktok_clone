import React, { useRef, useState } from "react";
import "../src/video.css";

function Video() {
    const[playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

   const handleVideoPress = () => {
    if (playing) {
        videoRef.current.pause();
        setPlaying(false);
    } else {
        videoRef.current.play();
        setPlaying(true);
    }
    //    if video is playing
    //     stop it....
    
    // otherwise if its not playing
    // play it...
   };
    return (
    <div className="videos">
            <video
            onClick = {handleVideoPress}
            className="video_player"
            loop
            ref={videoRef}
            src="https://v16m.tiktokcdn.com/e8df739a28bc2aad243ac08c7a2e0dd3/60ea425c/video/tos/useast2a/tos-useast2a-pve-0068/11158d1c9f834f33887830e631ce5998/?a=1233&br=5706&bt=2853&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210710185900010234104156003AD2FF&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzRpOWptOTw2NjMzNzczM0ApNGhoOWg6aTtnNzw0Zzk6aWdvbzBvaGppc2dgLS1kMTZzczE2YWNiYDMyYi01Ml4vYS46Yw%3D%3D&vl=&vr=">
        
            </video>

         {/* VideoFooter */}
        {/* VideoSidebar */}

    </div>
    );  
}


export default Video;