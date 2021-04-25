/* let myForm = document.forms[0]
console.log(myForm); */

/* let myForm = document.getElementsByTagName('form')[0]
console.log(myForm); */



let myForm = document.forms.search
    /* console.log(myForm); */
    /* 
    let myInput = myForm.mytxt
    console.log(myInput);

    let myButton = myForm.btn
    console.log(myButton); */


/* console.log(myForm.action);
console.log(myForm.method);
console.log(myForm.leng); */

let myInput = myForm.mytxt
myInput.required = true
myInput.readOnly = true
myInput.disabled = true

let myButton = myForm.btn
myButton.disabled = true