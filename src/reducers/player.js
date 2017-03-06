import {PAUSE, PLAY, NEXT, PREV} from '../constants';

const initialState = [
  {
    backgroundImage: "/public/images/toveStyrke.jpg",
    playlistName: "Tove Styrke station",
    playlistImege: "/images/albumCover.png",
    link: 'sadasd',
    list: [
      {
        songName: "Samurai boy",
        songAuthor: "Tove Styrke",
        albumCover: "/images/albumCover2.png",
        duration: "3:21",
        link: "asd"
      }
    ]
  }
]

export default function player(state = initialState, action) {
  switch (action.type) {
    case PAUSE:
      return
        {
          isPlaying: true
        }

    default:
      return state
  }
}
