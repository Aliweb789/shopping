/* Asynchronous function:callback vs Async vs Promise

DEFINE       CALL
callback     callback
async/await  then/catch async/await
promise      then/catch

*/
/*
//define
function division(a, b, callback) {
    if(b == 0) {
        callback("Not divided by zero, you cannot divide number to 0", null)
    } else {
        callback(null, a % b)
    }
}

//call 
division(10,3, function(err, data) {
    if(err) console.log("ERROR:", err)
        else {
            // setTimeout(function() {
            //     console.log("RESULT:",data)
            //     console.log("...")
            // }, 2000)}
            setInterval(function() {
                console.log("RESULT:",data)
                console.log("...")
            }, 2000)}
});
 */
/*

//define
async function division(a, b) {
    if(b == 0) {
        throw new Error("Not divided by zero")
    } else {
        // setTimeout(function() async larda setTimeout, setInterval ishlamaydi
        // }, 2000)
        return a % b
    }
}

//call 
division(10, 3).then(data => {
    console.log("Result:", data)
    console.log(".......");
    
}).catch(err => {
    console.log("Error division:",err)
}); */

//define
async function division(a, b) {
    if (b === 0) {
      throw new Error("Not divided by zero");
    } else {
        return a % b;
    }
}


async function run() {
    let result  = await division(10, 3);
    console.log("result one:", result);

    result  = await division(10, 4);
    console.log("result two:", result);
    
    result  = await division(20, 7);
    console.log("result three:", result);
}

run()