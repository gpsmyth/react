import React from "react";

import { connect } from "react-redux"; // Step 1

const SongDetail = ({ mySong }) => {
  // Instead of props, we're using mySong, so instead of
  // props.mySong.title we can use mySong.title
  console.log("SongDetail mySong ", mySong);

  if (mySong === null) {
    console.log("Null song");
    return <div>Select a Song</div>;
  }

  // return <div>SongDetail</div>;
  return (
    <div>
      <h3>Song Details</h3>
      <p>
        Title: {mySong.title}
        <br></br>
        Duration: {mySong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  // Step 3 -  defining mapStateToProps
  // Always going to get an arg of state,
  console.log("SongDetail mapStateToProps ", state);

  // Always returning an object, that is going to show
  // as props inside our componenet
  return { mySong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail); // Step 2
