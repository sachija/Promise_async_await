
// /que 1-Write one example explaining how you can write a callback function ?
// / function
function hello(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
hello('Peter', callMe);
// "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

const counter = () => {
        setTimeout(() => {
             console.log(1);
            setTimeout(() => {
                console.log(2)
                setTimeout(() =>{
                    console.log(3)
                    setTimeout(() => {
                        console.log(4)
                        setTimeout(() => {
                            console.log(5)
                            setTimeout(() => {
                                console.log(6)
                                setTimeout(() => {
                                    console.log(7)
                                },7000);
                            },6000);
                        },5000);
                    },4000);
                },3000);
            },2000);
        },1000);
    }
    counter()

    // que 3-"Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
let promise = new Promise ((resolve,reject) => {
    resolve()
})
promise.then(() => {
    setTimeout(() => {
        console.log("1")
    },1000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("2")
    },2000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("3")
    },3000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("4")
    },4000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("5")
    },5000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("6")
    },6000);
})
promise.then(() => {
    setTimeout(() => {
        console.log("7")
    },7000);
})
// que 4 Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

const check = "yes";
const Argument = new Promise((resolve,reject) => {
    if(check=="yes"){
        resolve(check);
    }
    else{
        reject()
    }
})
Argument
.then((check)=>{
    console.log("promise fulfilled",check);
})
.catch(() =>{
    console.log("promise reject")
})
.finally(() => {
    console.log("End of the promises")
})

// que 5 Create examples to explain callback function
function hello(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
hello('Peter', callMe);


// que 7 create example to explain the promise.all()

const promise1 = Promise.resolve(3);
const promise2 = "1";
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// que 8-create example to explain promise function

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

  // a promise
let Promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// que 9-create a function to show the example of async await

// async function
async function promises() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
promises();