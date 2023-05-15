import TitleInfo from "./Components/TitleInfo/TitleInfo";
import style from "./App.css";
import React, { Fragment, useState } from "react";
import Conclusion from "./Components/Conclusion/Conclusion";

function App() {
  const [view, setView] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [userExpert, setUserExpert] = useState(0);
  function viewOpen() {
    setView(true);
  }

  function viewClose() {
    setView(false);
  }
  return (
    <>
      <TitleInfo
        viewOpen={viewOpen}
        setTotalTime={setTotalTime}
        setUserExpert={setUserExpert}
      />
      <Conclusion view={view} totalTime={totalTime} userExpert={userExpert} viewClose={viewClose} />
    </>
  );
}
export default App;
