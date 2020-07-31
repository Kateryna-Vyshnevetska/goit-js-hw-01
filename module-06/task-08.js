// Массив имен всех пользователей у которых есть друг с указанным именем.
import {default as users}  from './users.js';

const getUsersWithFriend = (users, friendName) => {
  const result = [...users];
  const arr = result.filter(elem => elem.friends
  .find(friend => friend === friendName))
  .map(elem => elem.name);;
  return arr;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]