let username = prompt('نام کاربری خود را وارد کنید');
if (username == "admin") {
    console.log('نام کاربری صحیح است');
} else {
    console.log('نام کاربری اشتباه است');
}

function concat(str1, str2, str3 = '') {
    let result = str1 + str2;
    if (str3 !== '') {
        result += str3;
    }
    console.log(result);
}
concat('salam', 1, 0);