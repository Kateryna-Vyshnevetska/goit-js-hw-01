// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст 
// заголовка элемента (тега h2) и количество элементов в категории 
// (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const ulRef = document.querySelector('li');
// console.log(ulRef.textContent);

console.log(Array.from(ulRef.childNodes)); 
console.log(ulRef.children);

const liRef = document.querySelectorAll('ul');
console.log(liRef);



