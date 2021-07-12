import React from 'react';
import "./App.css";
import Video from './Video';

function App() {
  return (
    //We're using the BEM naming convention
    <div className="app">
        <div className="app_videos">

     
      <Video /> 
      <Video />
      <Video />
      <Video />
      <Video />

      </div>

    {/* app container */}
      {/* videos */}
      {/* <Video/> */}
      {/* <Video/> */}
      {/* <Video/> */}
      {/* <Video/> */}
      {/* <Video/> */}
    </div>
  );
}

export default App;
