// var date = new Date().toDateString(); 

const dates = new Date();
const [month, day, year]= [dates.getMonth(), dates.getDate(), dates.getFullYear()];
var monthString = dates.toLocaleString('default', {month: 'long'});
console.log(monthString);
var cdate = document.querySelector("#currunt-DDMM");
cdate.innerHTML = `${day} ${monthString}`; 

var yeard = document.querySelector("#currrunt_yyyy");
yeard.innerHTML = `${year}`;

// console.log(`Day is ${date.getUTCDay()}`);
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getSeconds());
// console.log(date.getTime());
// console.log(date.getTimezoneOffset());
// console.log(date.getUTCDate());
// console.log(date.getUTCDay());

// var dated = Date();

// console.log(date);



// printing the days passed here in shimla
const date1 = new Date('9/13/2022');
// added +1 in month bcz it shows one less 
const date2 = new Date(`${month+1}/${day}/${year}`);
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
var timepassed = document.querySelector("#days-passed");
timepassed.innerHTML = diffDays; 








