// Завдання 1. Лічильник подій
// Створіть функцію, яка рахує, скільки елементів масиву відповідають певній умові, використовуючи колбек-функцію для перевірки.
// Створіть функцію countItems(array, condition)
// Створіть змінну count = 0
// Пройдіться по масиву циклом for...of
// Для кожного елемента викличте condition(element)
// Якщо condition повертає true, збільште count на 1
// Поверніть кінцевий результат

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

// Завдання 2: Калькулятор з операціями
// Створіть універсальний калькулятор, який може виконувати різні математичні операції залежно від переданої колбек-функції.
// Створіть стрілкову функцію calculate(a, b, operation)
// Функція повинна викликати operation(a, b) та повернути результат
// Створіть 4 стрілкові функції для операцій: add, subtract, multiply, divide
// У функції divide додайте перевірку на ділення на нуль
// Протестуйте всі операції
const calculate = (a, b, operation) => {
  return operation(a, b);
};
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (a === 0 || b === 0) {
    alert("Error: Ділення на нуль заборонено");
  }
  return a / b;
};

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));
console.log(calculate(10, 0, divide));

// Завдання 4: Кінотеатр (творче та додаткове завдання)
// Створіть власну функцію обробки списку фільмів, яка може застосовувати різні дії до кожного фільму у колекції.
// Створіть функцію processMovies(movies, action)
// Пройдіться по масиву фільмів циклом for або for...of
// Для кожного фільму викличте action(movie, index) (передайте фільм та його номер)
// Створіть мінімум 3 різні колбек-функції для обробки фільмів
// Протестуйте всі варіанти

const movies = [
  "Аватар",
  "Титанік",
  "Гра престолів",
  "Темний лицар",
  "Форест Гамп",
  "Інцепція",
];

function processMovies(movies, action) {
  for (let index = 0; index < movies.length; index++) {
    const movie = movies[index];
    action(movie, index);
  }
}

function watchMovie(movie, index) {
  console.log(`Користувач дивиться ${movie} під індексом: ${index}`);
}

function likeMovie(movie, index) {
  console.log(`Користувач лайкнув ${movie} з індексом: ${index}`);
}

processMovies(movies, watchMovie);
processMovies(movies, likeMovie);
