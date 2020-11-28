import React, { useState } from "react";
import ConfigWorkPlan from "./components/configWorkPlan";
import TimeViewer from "./components/TimeViewer";

const App = () => {
  const [showTimeViewer, setShowTimeViewer] = useState(false);

  console.log(showTimeViewer);
  return (
    <div className="App">
      <header className="App-header">
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
