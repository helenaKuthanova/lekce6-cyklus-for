// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');

//TADY NAPIS CYKLUS
let a = 0;

while (a<11) {
    console.log(a);
    a++;
}

console.log('-------------------');

// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a <');

//TADY NAPIS CYKLUS
b = 0;

while (b<11) {
    console.log(b);
    b++;
}

console.log("-")

c = 0; 

while (c<=11) {  // výpis včetně 11
    console.log(c);
    c++;
}

console.log('-------------------');

// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

//TADY NAPIS CYKLUS

d = 10;

while (d>=0) {
    console.log(d);
    d--;
}

console.log('-------------------');