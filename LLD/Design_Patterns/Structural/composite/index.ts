import { File } from "./File";
import { Folder } from "./Folder";

const file1 = new File("file1.txt");
const file2 = new File("file3.txt");
const folder = new Folder("Folder 1");
folder.addComponent(file1);
folder.addComponent(file2);

const file3 = new File("file3.txt");
const subFolder = new Folder("Sub folder 1");
subFolder.addComponent(file3);

folder.addComponent(subFolder);

folder.display();
