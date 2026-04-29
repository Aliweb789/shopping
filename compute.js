/* callback function
define     call
callback    function
*/

//define
function division(a, b, callback) {
    if(b == 0) {
        callback("Not divided by zero", null)
    } else {
        callback(null, a % b)
    }
}

//call   doimo call qismidan birinchi boshlash kerak
division(10,3, function(err, data) {
    if(err) console.log("ERROR:", err, data)
        else {
            console.log("RESULT:",data, err)}
            console.log("...")
});

