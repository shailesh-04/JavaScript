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
