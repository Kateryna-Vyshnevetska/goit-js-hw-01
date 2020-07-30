// Массив имен (поле name) людей, отсортированных в зависимости 
// от количества их друзей (поле friends)
import {default as users}  from './users.js';

const getNamesSortedByFriendsCount = users => {
  let result = users
  .sort((a,b)=> a.friends.length - b.friends.length)
  .map((elem)=>{return elem.name});
  return result;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]