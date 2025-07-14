export interface iterator<T> {
  hasNext(): Boolean;
  next(): T | null;
}
