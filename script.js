 /* let str = 'hello from javascript' */
 /* console.log(str.indexOf('javascript')); */
 /* 
  let reg1 = /javascript/i; */
 /*  let reg2 = new RegExp('javascript', 'i') */

 /* let res = reg1.test('hello Javascript')
 console.log(res);
 */
 /* let reg3 = /l{5}/
 let reg4 = /c.m/
 let res = reg4.test('hello welcome to js')
 console.log(res); */

 /* let reg1 = /javascript/ig;
 let res = reg1.exec('hello to javascript, javascript is best language')
 let res2 = reg1.exec('hello to javascript, javascript is best language')
 console.log(res);
 console.log(res2); */

 let str = 'javascript'
     /*  let res = str.match(/[aiod]/g) */
     /* let res = str.search(/[xb]/) */
 let res = str.replace(/[aiod]/g, '*')
 console.log(res);