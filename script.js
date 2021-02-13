const person = {
    fname: 'mohsen',
    lname: 'javadi',
    sleep: function() {
        console.log('bekhab');
    }
};

console.log('fname' in person);
console.log('family' in person);