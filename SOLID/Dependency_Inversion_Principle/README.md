## Dependency Inversion Principle

### High level modules should not depend on low level modules. Both should depend on abstractions.

### Abstractions should not depend on details. Details should depend on abstraction.

**Dependency Injection** Injecting dependencies into an instance of a clas from outside instead initialising the dependency from within the class which leads to tight coupling and a violation of Dependency Inversion Principle.

**_IOC_**: Inversion of control: The Responsibility of injecting dependencies into a module lies with an IOC container (using a framework like Spring or NestJS), instead of with the application.
