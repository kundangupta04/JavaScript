// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();

( (name) => {
    // un-named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})('hitesh')