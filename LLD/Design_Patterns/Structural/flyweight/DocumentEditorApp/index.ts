import { Document } from "./Document";

const document = new Document();

const fontStyle = "Ariel";
const fontSize = 20;
const color = "Blue";

document.addCharacter("H", fontStyle, fontSize, color);
document.addCharacter("E", fontStyle, fontSize, color);
document.addCharacter("L", fontStyle, fontSize, color);
document.addCharacter("L", fontStyle, fontSize, color);
document.addCharacter("O", fontStyle, fontSize, color);

document.addCharacter("!", fontStyle, 10, "Red");

document.render();
