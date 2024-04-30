
function createCounter(initialValue = 0) {
    let count = initialValue;

    function increment() {
        return ++count;
    }

    function decrement() {
        return --count;
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        decrement,
        getCount
    };
}

// Usage example
const counter = createCounter(5);
console.log(counter.getCount()); 
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.getCount()); 
