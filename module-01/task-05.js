let cost;
let userInput = prompt('В какую страну Вы хотите осуществить доставку?');

if (userInput === null) {
  alert('Отменено пользователем!');
} else {
  userInput = userInput.toLowerCase();

  switch (userInput) {
    case 'китай':
      cost = 100;
      break;

    case 'чили':
      cost = 250;
      break;

    case 'австралия':
      cost = 170;
      break;

    case 'индия':
      cost = 80;
      break;

    case 'ямайка':
      cost = 120;
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }

  if (cost > 0) {
    alert(`Доставка в ${userInput} будет стоить ${cost} кредитов`)
  }
}

