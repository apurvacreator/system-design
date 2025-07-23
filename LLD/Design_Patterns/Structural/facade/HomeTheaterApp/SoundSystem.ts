export class SoundSystem {
  setVolume(level: number) {
    console.log(`Sound System: Volume set to ${level}`);
  }

  on() {
    console.log("Sound System: Turned on");
  }

  off() {
    console.log("Sound System: Truned off");
  }
}
