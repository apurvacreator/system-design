export class LightingControl {
  dim(level: number) {
    console.log(
      `Lighting control: Dimming lights to ${level}%`
    );
  }

  on() {
    console.log("Lighting control: Lights are on");
  }

  off() {
    console.log("Lighting control: Lights are off");
  }
}
