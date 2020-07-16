let credits = 23580;
const PRICE_PER_DROID = 3000;
let totalPrice;

let userInput = prompt('Какое количество дроидов Вы хотите купить?');

if (userInput === null || userInput != Number(userInput) || Number(userInput) === 0) {
  alert('Отменено пользователем либо некорректный ввод!');
}
else {
  totalPrice = userInput * PRICE_PER_DROID;
  if (totalPrice > credits) {
    alert('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
    alert(`Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`)
  }
}


