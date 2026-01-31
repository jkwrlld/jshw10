const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

function countItems(array, condition) {
  let count = 0;

  for (const element of array) {
    if (condition(element)) {
      count++;
    }
  }

  return count;
}

// Умови для перевірки:
const isEven = (num) => num % 2 === 0;
const isLarge = (num) => num > 10;
const isShort = (word) => word.length <= 3;

// Тестування
console.log("Парних чисел:", countItems(numbers, isEven)); // 3
console.log("Чисел більше 10:", countItems(numbers, isLarge)); // 3
console.log("Коротких слів:", countItems(words, isShort)); // 1
