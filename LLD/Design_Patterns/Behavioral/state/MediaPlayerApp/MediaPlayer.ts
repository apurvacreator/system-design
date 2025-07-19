import { MediaPlayerState } from "./MediaPlayerState";
import { PausedState } from "./PausedState";
import { PlayingState } from "./PlayingState";
import { StoppedState } from "./StoppedState";

export class MediaPlayer {
  private state: MediaPlayerState;

  constructor() {
    this.state = new PlayingState();
  }

  setState(state: MediaPlayerState) {
    this.state = state;
  }

  play() {
    this.state.pressPlay();
    this.setState(new PlayingState());
  }

  pause() {
    this.state.pressPause();
    if (!(this.state instanceof StoppedState)) {
      this.setState(new PausedState());
    }
  }

  stop() {
    this.state.pressStop();
    this.setState(new StoppedState());
  }

  displayState() {
    this.state.display();
  }
}
