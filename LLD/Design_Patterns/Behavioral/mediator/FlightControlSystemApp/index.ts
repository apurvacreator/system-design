import { Aeroplane } from "./Aeroplane";
import { ControlTower } from "./ControlTower";

const controlTower = new ControlTower();

const indigo = new Aeroplane("IN123", controlTower);
const airIndia = new Aeroplane("AI321", controlTower);
const vistara = new Aeroplane("V28", controlTower);

controlTower.registerAeroplane(indigo);
controlTower.registerAeroplane(airIndia);
controlTower.registerAeroplane(vistara);

indigo.requestTakeOff();
airIndia.requestTakeOff();
vistara.requestTakeOff();

indigo.completeTakeOff();
vistara.requestTakeOff();

airIndia.completeTakeOff();
vistara.completeTakeOff();

indigo.requestLanding();
vistara.requestLanding();
airIndia.requestLanding();

indigo.completeLanding();
airIndia.requestLanding();

vistara.completeLanding();
airIndia.completeLanding();
