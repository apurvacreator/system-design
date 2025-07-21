import { ProxyImage } from "./ProxyImage";

const img1 = new ProxyImage("resume.pdf");
// Only Proxy Image instance created, but image is not loaded
const img2 = new ProxyImage("cover-letter.pdf");

img1.display();
// Loaded image displayed from cache
img1.display();
