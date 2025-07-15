import { Chatroom } from "./Chatroom";
import { User } from "./User";

const chatroom = new Chatroom();

const alex = new User("Alex", chatroom);
const martin = new User("Martin", chatroom);
const bonnie = new User("Bonnie", chatroom);

chatroom.addUser(alex);
chatroom.addUser(martin);
chatroom.addUser(bonnie);

alex.send("Hello All");
martin.send("Long time no see!");
