
// Реалізувати універсальну функцію для знаходження найбільшого елемента в масиві.
// (якщо це number це має бути найбільше чісло якщо це string це має бути найбільше слово)

function findLargestElement<T extends string | number>(arr: T[]): T {
  let largestElement: T = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === 'string' && typeof largestElement === 'string') {
      if ((arr[i] as string).length > (largestElement as string).length) {
        largestElement = arr[i];
      }
    } else if (typeof arr[i] === 'number' && typeof largestElement === 'number') {
      if ((arr[i] as number) > (largestElement as number)) {
        largestElement = arr[i];
      }
    }
  }
  return largestElement;
}

const num = [1, 5, 3, 9, 2];
console.log(findLargestElement(num));

const text = ['aaaa', 'asa', 'asasa', 'asadda'];
console.log(findLargestElement(text));
