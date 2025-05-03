Sure! Here's a clear and beginner-friendly explanation of **variables in JavaScript**:

---

### Variables in JavaScript

A **variable** in JavaScript is like a container that holds data. It allows you to store, update, and reuse values in your code.

#### Declaring Variables

In JavaScript, you can declare variables using three keywords:

1. **`var`** – Old way (not recommended for modern code).
2. **`let`** – Modern way, used for variables that can change.
3. **`const`** – Used for variables that should not change.

#### Syntax:

```javascript
let name = "Shailesh";
const age = 25;
var city = "Mumbai";
```

* **`let`** allows you to reassign values:

  ```javascript
  let score = 10;
  score = 15; // OK
  ```

* **`const`** is used when you don’t want the value to change:

  ```javascript
  const pi = 3.14;
  pi = 3.15; // ❌ Error! Cannot change a const
  ```

* **`var`** is function-scoped and can cause unexpected behavior, so it’s mostly avoided in modern JavaScript.

#### Naming Rules:

* Names can include letters, digits, `$`, and `_`.
* Must not start with a digit.
* Are case-sensitive (`Name` and `name` are different).
* Should be meaningful (e.g., `userName` is better than `x`).

#### Example:

```javascript
let firstName = "Isha";
const yearOfBirth = 2000;

console.log(firstName);      // Output: Isha
console.log(yearOfBirth);    // Output: 2000
```

---
