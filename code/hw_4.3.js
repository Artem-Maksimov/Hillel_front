const age = prompt(`Вкажіть рік народження`, `35`);
console.log(age);
const city = prompt(`Вкажіть місто`, `Київ`);
console.log(city);
let out = "";
if (city === `Київ`) {
    out = `ти живеш у столиці Ukraine`;
} else if (city === `Вашингтон`) {
    out = `ти живеш у столиці USA`;
} else if (city === `Лондон`) {
    out = `ти живеш у столиці Great Britain`;
}
else out = `ти живеш у місті ${city} `;
const sport = prompt(`Вкажіть вид спорту`, `Футбол`);
console.log(sport);

if (age === null) {
  out = `Шкода, що Ви не захотіли ввести свій вік`;
  alert(`${out}.`);
} else if (city === null) {
  out = `Шкода, що Ви не захотіли ввести своє місто`;
  alert(`${out}.`);
} else if (sport === null) {
  out = `Шкода, що Ви не захотіли ввести свій улюблений вид спорту`;
  alert(`${out}.`);
} else {
  alert(`Твій вік ${age}, ${out}, улюблений вид спорту ${sport}.`);
}