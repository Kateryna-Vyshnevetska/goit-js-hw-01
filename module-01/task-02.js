const TOTAL = 100;
const MAX_ORDER = 140;
let ordered;

for (ordered = 20; ordered <= MAX_ORDER; ordered += 30) {

    if (ordered <= TOTAL) {
        console.log('Вы заказали ', ordered, ' товаров');
        console.log("Заказ оформлен, с вами свяжется менеджер");
        console.log();
    } else {
        console.error('На складе недостаточно товаров!');
        console.error('Вы заказали ', ordered, ' максимум', TOTAL);
        console.log();
    }
}
