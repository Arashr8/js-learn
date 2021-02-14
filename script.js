/* let myDate = new Date('2020 10 10'); */

let myDate = new Date('2020 Dec 10');
myDate = new Date('22 November 2020');
myDate = new Date('Oct 21 2020 11:10:00');
myDate = new Date(2019, 2, 9);
myDate = new Date(2019, 1, 36);
myDate = new Date(2019, 1, 10, 10, 15, 20, 07);
myDate = new Date(0);
myDate = new Date(100000000);
myDate = new Date(1549848025346);
myDate = new Date(1550100000323);
/* console.log(myDate.getDay());
console.log(myDate.getDate());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());
console.log(myDate.getTime());
console.log(myDate.getTimezoneOffset()); */
/* myDate.setDate(17)
myDate.setHours(14)
console.log(myDate.toString()); */
/* console.log(Date.now());
console.log(Date.parse('21 oct 2019'));
console.log(Date.parse('21 oct 2019 11:00')); */
myDate = new Date(2019, 1, 10, 10, 15, 20, 07);
console.log(myDate.toDateString());
console.log(myDate.toLocaleTimeString('fa-IR'));
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
console.log(myDate.toLocaleTimeString('ar-EG', options));