var li = [];
for (i=0;i<16;i++)  {
  li.push(Math.floor(Math.random() * (10 - -10) + -10));
}

console.log("Список : ",li);
console.log("Максимальное число = ",Math.max.apply(null, li));
console.log("Сумма положительныч чисел = ",li.reduce((sum,el) => el >= 0 ? sum + el : sum, 0));
console.log("Количество отрицательный чисел = ",li.reduce((sum,el) => el <= 0 ? sum + 1 : sum, 0));
