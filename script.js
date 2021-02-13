const person = {
    fname: 'mohsen',
    lname: 'javadi',
    sleep: function() {
        console.log('bekhab');
    }
};

console.log(person);
delete person.lname
console.log(person);