
const a = Number(prompt("Введи число "));
const b = Number(prompt("Введи число "));
const c = Number(prompt("Введи число "));
let d = b*b - 4 * a * c;
let x1 = (-b+d**0.5)/(2*a);
let x2 = (-b-d**0.5)/(2*a);
if (d>0) {
  console.log(x1,x2);
}
else if (d===0) {
  console.log(x2);
}
else {
  console.log("Нет корней");
}