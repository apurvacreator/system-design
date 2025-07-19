import { MediaPlayerState } from "./MediaPlayerState";

export class StoppedState implements MediaPlayerState {
  pressPlay(): void {
    console.log("Starting playback");
  }

  pressStop(): void {
    console.log("Stopping playback");
  }

  pressPause(): void {
    console.log("Can't pause. Media is already stopped");
  }

  display(): void {
    console.log("Current state: Stopped");
  }
}
