// client
import { BookCollection } from "./BookCollection";

const bookCollection = new BookCollection();
bookCollection.addBook({ title: "Python Progamming" });
bookCollection.addBook({ title: "DS and Algo" });

const iterator = bookCollection.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
