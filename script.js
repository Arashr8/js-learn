const person = {
    fname: 'mohsen',
    lname: 'javadi',
    sleep: function() {
        console.log('bekhab');
    }
};
for (let key in person) {
    console.log(person[key]);

}