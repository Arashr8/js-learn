let person = {
    firstname: 'arash',
    lastname: 'raji',
    age: 34,
    showBio() {
        console.log(this.firstname + ' ' + this.lastname + ' ' + this.age);
    }

}
person.showBio()