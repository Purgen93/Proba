
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

let week = {};
for (let i = 0; i < Math.min(en.length, ru.length); i++) {
    week[en[i]] = ru[i];


}
console.log(week);