## Behavioral patterns

- Deals with communication between objects
- Provides solutions for managing object relationships, communication protocols
- Promotes loose coupling, thereby enhancing flexibility

### Common Applications

- Interactions between objects
- Managing state transitions and comunication

**Memento Pattern**: Design pattern used to capture and restore an object's previous state without exposing its internal structure. It's perfect for undo/redo functionality, like in text editors or drawing apps.

**Observer Pattern**: Defines a one-to-many relationship between objects—when one object (the subject) changes state, all its dependents (observers) are notified and updated automatically

**Strategy Pattern**: Design pattern that enables selecting an algorithm's behavior at runtime. It helps you define a family of algorithms, encapsulate each one as a separate class, and make them interchangeable without altering the client code.

**Command Pattern**: Design pattern that turns a request into a stand-alone object containing all the information about the request. This enables you to parameterize methods with different requests, queue or log requests, and support undo operations.

**Template Method Pattern**: Defines the skeleton of an algorithm in a method, deferring some steps to subclasses. It lets subclasses override specific steps without changing the overall structure of the algorithm.

**Iterator Pattern**: Design pattern that allows you to traverse elements of a collection without exposing its underlying representation.

**State Pattern**: Allows an object to change its behavior when its internal state changes—almost like switching out its brain mid-action 🧠✨. It’s handy when you have objects that behave differently based on their current condition or mode.
