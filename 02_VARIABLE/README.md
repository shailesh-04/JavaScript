# VARIABLES

Here's a clear and beginner-friendly explanation of **variables in JavaScript**:

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
# DIFFERENCE BETWEEN `LET` AND `VAR`
Here's a simple explanation of the **difference between `let` and `var`** in JavaScript:

---

### 🔍 `let` vs `var` in JavaScript

| Feature           | `let`                           | `var`                                  |
| ----------------- | ------------------------------- | -------------------------------------- |
| **Introduced in** | ES6 (2015)                      | ES5 and earlier                        |
| **Scope**         | Block-scoped (`{ ... }`)        | Function-scoped                        |
| **Hoisting**      | Hoisted but not initialized     | Hoisted and initialized as `undefined` |
| **Redeclaration** | ❌ Not allowed in the same scope | ✅ Allowed in the same scope            |
| **Use Today?**    | ✅ Recommended                   | ❌ Avoid (for clean code)               |

---

### 🔧 Examples

#### 1. **Scope difference**

```javascript
function test() {
  if (true) {
    let x = 10;
    var y = 20;
  }
  console.log(x); // ❌ Error: x is not defined (block scope)
  console.log(y); // ✅ Output: 20 (function scope)
}
test();
```

#### 2. **Redeclaration**

```javascript
let a = 5;
let a = 10; // ❌ Error: Identifier 'a' has already been declared

var b = 5;
var b = 10; // ✅ No error
```

#### 3. **Hoisting**

```javascript
console.log(x); // ❌ Error: Cannot access 'x' before initialization
let x = 5;

console.log(y); // ✅ Output: undefined
var y = 5;
```

---

### ✅ Recommendation:

Always use `let` (or `const` when the value shouldn't change). Avoid `var` in modern JavaScript for cleaner, safer code.

---

Would you like an example project or code snippet using `let` and `const` together?
