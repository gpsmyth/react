// Action creator
// Instead of the usual export default app
// we use named exports as per below line
export const selectSong = (song) => {
  // Return an action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

// Go to App.js to see how we would import
// this action creactor in another file
