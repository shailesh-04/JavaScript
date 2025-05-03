# DATATYPE

Here's a clear and simple explanation of **data types in JavaScript**:

---

### 📚 JavaScript Data Types

JavaScript has **two main categories** of data types:

#### 1. **Primitive Data Types** (basic, not objects)

These are simple values and are immutable (cannot be changed).

| Type          | Example                 | Description                          |
| ------------- | ----------------------- | ------------------------------------ |
| **String**    | `"Hello"`               | Textual data, enclosed in quotes     |
| **Number**    | `42`, `3.14`            | Integers and floating-point numbers  |
| **Boolean**   | `true`, `false`         | Logical values (yes/no, on/off)      |
| **Undefined** | `undefined`             | A variable declared but not assigned |
| **Null**      | `null`                  | Intentional absence of any value     |
| **BigInt**    | `12345678901234567890n` | For very large integers              |
| **Symbol**    | `Symbol("id")`          | Unique identifiers                   |

#### 2. **Non-Primitive (Reference) Data Types**

These hold collections or more complex data.

| Type         | Example                     | Description                   |
| ------------ | --------------------------- | ----------------------------- |
| **Object**   | `{ name: "Isha", age: 24 }` | Collection of key-value pairs |
| **Array**    | `[1, 2, 3]`                 | Ordered list of values        |
| **Function** | `function greet() { ... }`  | A block of reusable code      |

---

### 🧪 Example Code:

```javascript
let name = "Shailesh";     // String
let age = 25;              // Number
let isActive = true;       // Boolean
let phone;                 // Undefined
let result = null;         // Null
let bigNumber = 123456789123456789n; // BigInt
let id = Symbol("id");     // Symbol

let person = { name: "Isha", age: 24 }; // Object
let scores = [90, 85, 70];              // Array
```

---

### 🧠 Tip:

Use `typeof` to check a data type:

```javascript
console.log(typeof name);  // "string"
console.log(typeof age);   // "number"
```

---

Would you like a diagram or chart showing how these data types are grouped?
