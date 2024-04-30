// Custom implementation of map function
function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// Usage example
const numbers = [1, 2, 3, 4, 5];
const doubled = customMap(numbers, num => num * 2);
console.log(doubled); 
