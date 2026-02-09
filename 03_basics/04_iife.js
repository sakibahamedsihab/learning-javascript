// Immediately Invoked Function Expressions (IIFE)

(function one() {
    // named IIFE
    console.log('DB CONNECTED')
})();

((name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
} )('Shihab')
