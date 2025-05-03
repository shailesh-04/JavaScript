function test() {

    if (true) {
        let x = 10;  
        var y = 20;
    }
    console.log(x); // ❌ Error: x is not defined (block scope)
    console.log(y); // ✅ Output: 20 (function scope)
}

test();


// The 'let' variable create only for same scope not for out of the scope