let person = {
    fname: 'kaveh',
    lname: 'mirzaie',
    sleep() {
        console.log('bekhab');
    },
    jobb: {
        jobbName: 'worker',
        salary: 1000,
        welcome() {
            console.log('hi')
        }

    }
};
console.log(person.jobb.salary);
(person.jobb.welcome());