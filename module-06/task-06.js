// Получить массив пользователей попадающих в возрастную категорию 
// от min до max лет (поле age).
import {default as users}  from './users.js';

const getUsersWithAge = (users, min, max) => {

  const result = users.filter((elem)=>{return elem.age>min && elem.age<max})
  return result;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]