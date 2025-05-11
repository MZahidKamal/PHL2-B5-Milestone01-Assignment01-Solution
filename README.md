# PHL2-B5-Milestone01-Assignment01-Solution
---


# 1. What Are Some Differences Between Interfaces and Types in TypeScript?

### Interface
Primarily used for objects and classes. It can be extended using the `extends` keyword and supports declaration merging, meaning multiple interfaces with the same name can be defined and merged automatically.

### Type
Type aliases are more flexible. They can define primitives, unions, intersections, and more. However, they do not support declaration merging.

### Usage Difference
When defining object types with a type alias, the structure declaration is optional, but with an interface, the object’s structure must be defined. For objects and classes, using an interface is safer and more ideal.

### Example: Using Interface and Type
```typescript
// Example using Type Alias
type Point = {
    x: number;
    y: number;
};
const point1: Point = { x: 10, y: 20 };
console.log(point1);

// Example using Interface
interface Shape {
    width: number;
    height: number;
}
const shape1: Shape = { width: 30, height: 40 };
console.log(shape1);
```

### What Happened in the Example?
- `type Point` creates a type alias with `x` and `y` properties. The `point1` object follows this type.
- `interface Shape` defines an interface with `width` and `height` properties. The `shape1` object follows this interface.

### What TypeScript Rules/Syntax Did I Learn?
- Use the `type` keyword to create a type alias, e.g., `type Name = { property: type }`.
- Use the `interface` keyword to create an interface, e.g., `interface Name { property: type }`.
- Both types and interfaces can define object structures, but types are more flexible, while interfaces are more structured.


---


# 2. What is the use of the `keyof` keyword in TypeScript? Provide an example?
### `keyof` Keyword in TypeScript

The `keyof` keyword in TypeScript returns all property names (keys) of a type as a union type. It is used when we want to dynamically access an object’s keys or work with them. It helps ensure type safety by restricting access to only valid keys.

## Example: Using `keyof`
```typescript
type Person = { name: string; age: number; city: string };
type PersonKeys = keyof Person; // "name" | "age" | "city"

const key: PersonKeys = "name";
console.log(key); // Output: "name"

const person: Person = { name: "Zahid", age: 28, city: "Dhaka" };
console.log(person[key]); // Output: "Zahid"
```

### What Happened in the Example?
- `type Person` defines a type with `name`, `age`, and `city` properties.  
- `keyof Person` creates `PersonKeys`, which is a union type `"name" | "age" | "city"`.  
- The `key` variable stores `"name"`, and `person[key]` dynamically accesses the `name` property.  

### What TypeScript Rules/Syntax Did I Learn?
- The `keyof` keyword extracts all keys of a type as a union type, e.g., `keyof Type`.  
- It helps dynamically access properties, e.g., `obj[key]`.  
- It ensures type safety by allowing only valid keys of the type to be used.


---
