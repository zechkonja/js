let val;

const today = new Date();
let birth = new Date('1-30-1987 08:23:00');
birth = new Date('September 30 1987');
birth = new Date('9/10/1989');

val = today.getMonth();
val = today.getDate();
val = today.getDay(); // -> friday - 5
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birth.setMonth(2);
birth.setDate(12);
birth.setFullYear(1985);

console.log(birth);
