// IIFE : immediately invoked function expression

//    SYNTAX for normal function

//    (function function_name()   
//    {  
//        code block  
//    })();

//    SYNTAX for arrow function 

//    ((parameters) => { /* ... */ })(argument);   

(function greet() {
    console.log("hello!");
})();

// semicolon is mandatory after writing IIFE 

( (Name) => {
    console.log(`hello, ${Name}`);
} )("Tejas")
