function Geron(a, b, c) {
    let p = (a+b+c) / 2;
    return (p * (p - a) * (p - b) * (p - c))**0.5
}
document.write(Geron(Number(prompt()), Number(prompt()), N  umber(prompt())))