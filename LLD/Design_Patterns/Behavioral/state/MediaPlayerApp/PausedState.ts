import { MediaPlayerState } from "./MediaPlayerState";

export class PausedState implements MediaPlayerState {
  pressPlay(): void {
    console.log("Resuming playback");
  }

  pressStop(): void {
    console.log("Stopping Playback from pause");
  }

  pressPause(): void {
    console.log("Pausing playback");
  }

  display(): void {
    console.log("Current state: Paused");
  }
}
