/* throw 'hassan' */
/* 
throw new RangeError('value is too big'); */


function example(str) {
    if (typeof str != "string") {
        throw new TypeError('Input type is wrong!');
    }
    console.log('Type is correct.');
}
try {
    example(20)

} catch (error) {

    console.log(error.message);
}