# OPERATORS

 Here's a clear explanation of **operators in JavaScript**, with examples:

---

### ⚙️ JavaScript Operators

**Operators** are symbols used to perform operations on values and variables. JavaScript includes several types of operators:

---

### 1. **Arithmetic Operators**

Used for basic math.

| Operator | Description         | Example  | Result  |
| -------- | ------------------- | -------- | ------- |
| `+`      | Addition            | `5 + 2`  | `7`     |
| `-`      | Subtraction         | `5 - 2`  | `3`     |
| `*`      | Multiplication      | `5 * 2`  | `10`    |
| `/`      | Division            | `5 / 2`  | `2.5`   |
| `%`      | Modulus (remainder) | `5 % 2`  | `1`     |
| `**`     | Exponentiation      | `2 ** 3` | `8`     |
| `++`     | Increment           | `a++`    | `a + 1` |
| `--`     | Decrement           | `a--`    | `a - 1` |

---

### 2. **Assignment Operators**

Used to assign values to variables.

| Operator | Description         | Example  |
| -------- | ------------------- | -------- |
| `=`      | Assign              | `x = 10` |
| `+=`     | Add and assign      | `x += 5` |
| `-=`     | Subtract and assign | `x -= 3` |
| `*=`     | Multiply and assign | `x *= 2` |
| `/=`     | Divide and assign   | `x /= 4` |

---

### 3. **Comparison Operators**

Used to compare values.

| Operator | Description        | Example     | Result  |
| -------- | ------------------ | ----------- | ------- |
| `==`     | Equal (loose)      | `5 == "5"`  | `true`  |
| `===`    | Equal (strict)     | `5 === "5"` | `false` |
| `!=`     | Not equal (loose)  | `5 != "5"`  | `false` |
| `!==`    | Not equal (strict) | `5 !== "5"` | `true`  |
| `>`      | Greater than       | `10 > 5`    | `true`  |
| `<`      | Less than          | `10 < 5`    | `false` |
| `>=`     | Greater or equal   | `10 >= 10`  | `true`  |
| `<=`     | Less or equal      | `5 <= 10`   | `true`  |

---

### 4. **Logical Operators**

Used to combine conditions.

| Operator | Description | Example         | Result  |        |   |         |        |
| -------- | ----------- | --------------- | ------- | ------ | - | ------- | ------ |
| `&&`     | AND         | `true && false` | `false` |        |   |         |        |
| \`       |             | \`              | OR      | \`true |   | false\` | `true` |
| `!`      | NOT         | `!true`         | `false` |        |   |         |        |

---

### 5. **String Operator**

Used to join strings.

```javascript
let name = "Shailesh" + " Makavana"; // "Shailesh Makavana"
```

---

### 6. **Type Operators**

| Operator     | Description      | Example                         |
| ------------ | ---------------- | ------------------------------- |
| `typeof`     | Returns the type | `typeof 42` → `"number"`        |
| `instanceof` | Checks instance  | `arr instanceof Array` → `true` |

---

Would you like a practice quiz or interactive examples to try these out?

---
# new 

`❓The spread operator (...), optional chaining (obj?.val), and others like them are traditional operators or not ?`

Great observation! You're right — things like `...` (spread), `?.` (optional chaining), and object property access like `obj?.val` are technically **not traditional operators** in the same way arithmetic or logical operators are. They're **syntax features** or **special expressions**, even though we often call them "operators" casually.

Now let’s clarify them and also list some **other actual operators** in JavaScript that are often overlooked.

---

### ✅ Special Syntax Features (Not Traditional Operators)

| Syntax                     | Description                                                       |
| -------------------------- | ----------------------------------------------------------------- |
| `...` (Spread)             | Expands arrays or objects into individual elements/properties.    |
| `...?` (Optional Chaining) | Safely accesses nested object properties without causing errors.  |
| `??` (Nullish Coalescing)  | Returns the right-hand side if the left is `null` or `undefined`. |
| `in`                       | Checks if a property exists in an object.                         |
| `typeof`                   | Returns the type of a value (technically an operator).            |
| `instanceof`               | Checks if an object is an instance of a constructor.              |

---

### 💡 Other JavaScript Operators (Often Missed)

| Operator                  | Description                                                             |
| ------------------------- | ----------------------------------------------------------------------- |
| `delete`                  | Deletes a property from an object.                                      |
| `in`                      | Checks if a property exists in an object.                               |
| `new`                     | Creates an instance of an object.                                       |
| `typeof`                  | Returns the data type of a variable.                                    |
| `void`                    | Evaluates an expression and returns `undefined`.                        |
| `instanceof`              | Checks whether an object is an instance of a specific class.            |
| `??` (Nullish Coalescing) | Returns the right-hand value only if the left is `null` or `undefined`. |
| `?.` (Optional Chaining)  | Accesses nested properties safely (returns `undefined` if nullish).     |

---

### 🧪 Example of Each

```javascript
// Spread
const obj = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 };

// Optional chaining
let user = { name: "Isha", address: null };
console.log(user.address?.city); // undefined (no error)

// Nullish Coalescing
let input = null;
let output = input ?? "Default"; // "Default"

// in
console.log("a" in obj); // true

// delete
delete obj.b;

// instanceof
console.log([] instanceof Array); // true

// typeof
console.log(typeof 123); // "number"

// void
console.log(void 0); // undefined
```

---

Would you like a short cheat sheet image with all JavaScript operators?
