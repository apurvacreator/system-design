import { MediaPlayer } from "./MediaPlayer";

const mediaPlayer = new MediaPlayer();
mediaPlayer.play();
mediaPlayer.displayState();

mediaPlayer.pause();
mediaPlayer.displayState();

mediaPlayer.play();
mediaPlayer.displayState();

mediaPlayer.stop();
mediaPlayer.displayState();

mediaPlayer.pause();
mediaPlayer.displayState();
