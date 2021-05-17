let status = false;

let myPromise = new Promise(function(myresolve, myreject) {
    if (status === true) {
        setTimeout(function() {
                myresolve('i love you');
            },
            3000
        )
    } else {
        myreject('reject')
    }
})

myPromise.then(
    function(value) {
        console.log(value);
    },
    function(err) {
        console.log(err);
    }
)