## Creational patterns

- Aims to abstract the instantiation process
- Makes systems more flexible, maintainable, and scalable by decoupling the client code from the concrete classes it needs to instantiate.

**Singleton Pattern**: Ensures that a class has only one instance and provides a global point of access to it. It's a creational design pattern commonly used to manage shared resources like configuration, logging, or connection pools.

**Factory Pattern**: Design pattern that provides a way to create objects without exposing the instantiation logic to the client. Instead of using new directly, you use a factory method to get instances, often based on input or conditions.

**Abstract Factory Pattern**: Design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes. It’s like a factory of factories, giving you a flexible way to create groups of objects that work well together.

**Builder Design Pattern**: Separates the construction of a complex object from its representation. Instead of cramming all the logic into one huge constructor, the builder breaks it down step-by-step — offering flexibility and clarity, especially when an object has many optional parameters.

**Prototype Pattern**: Design pattern that allows you to create new objects by copying existing ones—rather than building from scratch. This is super handy when object creation is costly or when you want to preserve the original object's state.
