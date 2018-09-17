//sets array with three strings
var rm = ["rick", "morty", "mr.meeseeks"];

//sets promise
var logUpper = new Promise(function (resolve, reject) {
//sets timeout to length of array - three seconds
setTimeout(resolve, rm.length * 1000, {
//maps through var rm, converts to uppercase, and sets as message
message: rm.map(function(x){return x.toUpperCase()})
});
});

//sets then and catch
logUpper.then(function (data) {
//logs message data to console
console.log(data);
//error catch
}).catch(function (err) {
console.log(err)
})





