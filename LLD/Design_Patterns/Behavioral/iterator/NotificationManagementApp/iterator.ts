export interface Iterator<T> {
  next(): T | null;
  hasNext(): Boolean;
}
