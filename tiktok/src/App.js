import React from 'react';
import "./App.css";
import Video from './Video';

function App() {
  return (
    //We're using the BEM naming convention
    <div className="app">
     <h1>
       Let's build a Full-Stack 
       MERN tiktok app
     </h1>
      
      <Video /> 
      <Video />

    {/* app container */}
      {/* videos/ */}
      {/* <Video/> */}
      {/* <Video/> */}
      {/* <Video/> */}
      {/* <Video/> */}
      {/* <Video/> */}

    </div>
  );
}

export default App;
