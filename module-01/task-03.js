let massege;
let userInput;
const ADMIN_PASSWORD = 'Love JS';

userInput = prompt('Введите, пожалуйста, пароль');

if (userInput === null) {
  massege = 'Отменено пользователем!';
} else if (userInput === ADMIN_PASSWORD) {
  massege = 'Добро пожаловать!';
} else {
  massege = 'Доступ запрещен, неверный пароль!';
}

alert(massege);
