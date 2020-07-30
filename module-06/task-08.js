// Массив имен всех пользователей у которых есть друг с указанным именем.
import {default as users}  from './users.js';

const getUsersWithFriend = (users, friendName) => {
  const result = users
  .filter(elem => elem.friends
  .find(friend => friend === friendName));
  return result;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]