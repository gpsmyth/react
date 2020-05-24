import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
// named export below, so the {} is required
//import { selectSong } from "../actions";

// class App extends React.Component
const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
  // return <SongList />;
};

export default App;
