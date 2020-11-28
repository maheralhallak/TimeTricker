
import React, { useState } from "react";
import ConfigWorkPlan from "./components/configWorkPlan";
import TimeViewer from "./components/TimeViewer";
import SideBar from './components/sideBar/sideBar.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee,faHourglass,faClock ,faPeopleCarry,faCameraRetro,faHandsHelping,faChair} from '@fortawesome/free-solid-svg-icons';
library.add( faCheckSquare, faCoffee,faHourglass,faClock,faPeopleCarry,faCameraRetro,faHandsHelping,faChair)
const App = () => {
  const [showTimeViewer, setShowTimeViewer] = useState(false);

  console.log(showTimeViewer);
  return (
    <div className="App">
      <header className="App-header">
        <SideBar />
        {showTimeViewer ? (
          <TimeViewer />
        ) : (
          <ConfigWorkPlan setShowTimeViewer={setShowTimeViewer} />
        )}
      </header>
    </div>
  );
};

export default App;
