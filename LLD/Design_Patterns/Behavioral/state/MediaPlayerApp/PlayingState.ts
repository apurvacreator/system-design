import { MediaPlayerState } from "./MediaPlayerState";

export class PlayingState implements MediaPlayerState {
  pressPlay(): void {
    console.log("Starting playback");
  }

  pressStop(): void {
    console.log("Stopping playback");
  }

  pressPause(): void {
    console.log("Pausing playback");
  }

  display(): void {
    console.log("Current state: Playing");
  }
}
