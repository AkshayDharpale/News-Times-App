/* let a = new Date().toUTCString();
console.log(a); */
/* console.log(a. + "," + a.getDate()+ " " + a.getMonth() +" " +
 a.getFullYear() +  " " + a.toLocaleTimeString()); */

/*  var today = new Date();
var str = today.toUTCString();

console.log(str);  */




let a = new Date("2022-03-04T15:01:17Z");
console.log(a);

let b = new Date();
console.log(b);

/* let d = new Date("2022-03-08T15:01:17Z");
let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
console.log( "utc is " + utc);
let nd = new Date(utc + (3600000*+5.5));
let ist =  nd.toLocaleString();
console.log(" 1 .IST now is : " +ist);

let d1 = new Date();
let utc1 = d1.getTime() + (d1.getTimezoneOffset() * 60000);
console.log( "utc is " + utc1);
let nd1 = new Date(utc + (3600000*+5.5));
let ist1 =  nd1.toLocaleString();
console.log(" 2 .IST now is : " +ist1); */

/* let d = new Date();
let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
let nd = new Date(utc + (3600000*+5.5));
let ist =  nd.toLocaleString();
console.log("IST now is : " +ist);

let d = new Date("2022-03-08T15:01:17Z");
let utc = d.getTime() + (d.getTimezoneOffset() * 60000);

let nd = new Date(utc + (3600000*+5.5));

let ist =  nd.toLocaleString();
console.log("IST now is : " +ist); */