import { combineReducers } from 'redux';

const songs = () => {
  return [
    {
      title: 'Suede',
      duration: '3:01',
    },
    {
      title: 'Hurt',
      duration: '3:36',
    },
    {
      title: 'Black Moon Rising',
      duration: '3:42',
    },
    {
      title: 'Deep End',
      duration: '2:52',
    },
  ];
};

const selectedSong = (selected = null, action) => {
  switch (action.type) {
    case 'SELECT_SONG':
      return action.payload;
    default:
      return selected;
  }
};

export default combineReducers({
  songs,
  selectedSong,
});
