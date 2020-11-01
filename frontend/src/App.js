import React, { useEffect } from "react";
import M from "materialize-css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Tweets from "./Components/Tweeter/Tweets/Tweets";
import './App.css';

export default function App() {

  useEffect(() => {
    M.AutoInit()
  }, [])

  return (
    <div className="container">
      <div className="row fullHeight">
        <div className="col s12 m4 sideColumn sticky">
          <Sidebar />
        </div>
        <div className="col s12 m8">
          <Tweets></Tweets>
        </div>
      </div>
    </div>
  );
}