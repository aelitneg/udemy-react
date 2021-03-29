import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>No Song Selected</div>;
  }
  return (
    <div>
      <h3>Detail for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = ({ selectedSong }) => {
  return { song: selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
