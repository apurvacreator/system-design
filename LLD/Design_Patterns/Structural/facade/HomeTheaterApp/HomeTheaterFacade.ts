import { DVDPlayer } from "./DVDPlayer";
import { LightingControl } from "./LightingControl";
import { Projector } from "./Projector";
import { SoundSystem } from "./SoundSystem";

export class HomeTheaterFacade {
  private dvdPlayer: DVDPlayer;
  private lightingControl: LightingControl;
  private soundSystem: SoundSystem;
  private projector: Projector;

  constructor() {
    this.dvdPlayer = new DVDPlayer();
    this.lightingControl = new LightingControl();
    this.projector = new Projector();
    this.soundSystem = new SoundSystem();
  }

  watchMovie(dimmingPercentage: number, volume: number) {
    this.lightingControl.on();
    this.lightingControl.dim(dimmingPercentage);

    this.projector.on();
    this.projector.setInput();

    this.soundSystem.on();
    this.soundSystem.setVolume(volume);

    this.dvdPlayer.play();
  }
}
