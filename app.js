"use strict";
// Реалізувати універсальну функцію для знаходження найбільшого елемента в масиві.
// (якщо це number це має бути найбільше чісло якщо це string це має бути найбільше слово)
function findLargestElement(arr) {
    let largestElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] === 'string' && typeof largestElement === 'string') {
            if (arr[i].length > largestElement.length) {
                largestElement = arr[i];
            }
        }
        else if (typeof arr[i] === 'number' && typeof largestElement === 'number') {
            if (arr[i] > largestElement) {
                largestElement = arr[i];
            }
        }
    }
    return largestElement;
}
const numbers = [1, 5, 3, 9, 2];
console.log(findLargestElement(numbers));
const words = ['aaaa', 'asa', 'asasa', 'asadda'];
console.log(findLargestElement(words));
