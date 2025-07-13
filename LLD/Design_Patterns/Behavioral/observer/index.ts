import { MobileDevice } from "./MobileDevice";
import { WeatherStation } from "./WeatherStation";
import { WindowDevice } from "./WindowDevice";

const weatherStation = new WeatherStation();
const mobileDevice = new MobileDevice();
const windowDevice = new WindowDevice();

weatherStation.registerObserver(mobileDevice);
weatherStation.registerObserver(windowDevice);

weatherStation.setTemperature(23);
weatherStation.setTemperature(27);

weatherStation.removeObserver(windowDevice);

weatherStation.setTemperature(30);
