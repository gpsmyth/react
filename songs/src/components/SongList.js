import React, { Component } from "react";
// L131 3:30 connect is lc - BUT WHY - TODO Discover this
import { connect } from "react-redux"; // Step 1
import { selectSong } from "../actions";

// class SongList extends React.Component {
class SongList extends Component {
  // render over a list of songs array into a map and return jsx
  renderList() {
    return this.props.songs.map((song) => {
      // Pass the mapping fn an inner fn which is going to be called
      // with a song ohject inside that array
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              {" "}
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // this.props === { songs: state.songs }
    // conosle.log will also show dispatch from the redux store
    console.log("render the props ", this.props);
    // return <div>SongList</div>;
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// state is entire list of songs from Songlist reducer and
// currently selected song from selctedSong reducer
// so state arg is all of the data from the song redux store
const mapStateToProps = (state) => {
  // Step 3 - always defining mapStateToProps
  // Always going to get an arg of state,
  console.log("SongList mapStateToProps ", state);

  // Always returning an object, that is going to show
  // as props inside our componenet
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongList); // Step 2
// Passing component as 2nd fn call - in this ccae, SongList
