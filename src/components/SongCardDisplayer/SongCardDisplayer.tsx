import AudioPlayer from "../audioplayer/AudioPlayer";
import { songList } from "./song_list.ts";
import "./songcarddisplayer.css";

export default function SongCardDisplayer() {
  return (
    <div className="songCardDisplayer">
      {songList.map((song) => (
        <AudioPlayer
          // key={null}
          key={song.artistName}
          songName={song.songName}
          artistName={song.artistName}
          artistTag={song.artistTag}
          songTag={song.songTag}
          albumArtPath={song.albumArtPath}
        />
      ))}
    </div>
  );
}
