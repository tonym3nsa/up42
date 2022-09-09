import React from "react";
import { BlocksPage } from "./pages/BlocksPage/BlocksPage";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BlocksPage />
    </div>
  );
}

export default App;
