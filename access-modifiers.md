# Title : Access Modifiers in TypeScript OOP

## Introduction

Access modifiers control how class properties and methods can be accessed in TypeScript. They are important concepts in Object-Oriented Programming (OOP) because they help protect data and control access.

## Detailed Explanation

TypeScript provides four modifiers: `public`, `private`, `protected`, and `readonly`.

The `public` modifier allows access from anywhere. It is also the default access level when no modifier is specified.

The `private` modifier allows access only inside the class where the property or method is declared.

The `protected` modifier allows access inside the declaring class and its subclasses, but not directly from outside.

The `readonly` modifier allows a property to be assigned during declaration or in the constructor, but prevents reassignment afterward.

For example:

```typescript
class Employee {
    public name: string;
    private salary: number;
    protected department: string;
    readonly id: number;

    constructor(
        name: string,
        salary: number,
        department: string,
        id: number
    ) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.id = id;
    }
}
```

In this example, `name` is publicly accessible, while `salary` is private. The `department` property can be accessed by subclasses, and `id` cannot be reassigned after initialization.

## Conclusion

Access modifiers improve encapsulation and make classes easier to manage. Choosing the correct modifier helps protect sensitive data and creates better object-oriented code.
