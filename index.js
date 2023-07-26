const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json());
// // To implement malware 

// function middleware1(req, res, next) {
//     console.log("From inside middleware " + req.headers.counter);
//     // If you're not going to call next() send error
//     res.send("Error from inside Middleware");
//     // next();
// }

// app.use(middleware1);

function calculate(counter) {
    var sum = 0;
    for (var i = 0; i < counter; i++) {
        sum += i;
    }
    return sum;
}


// app.get('/handleSum', (req, res) => {
//     var counter = req.query.counter;
//     var name = req.query.name;
//     var calculatedSum = calculate(counter);
//     console.log(calculatedSum);
//     var ans = "Hello "+ name + ", the sum is " + calculatedSum;
//     res.send(ans);
// })

app.post('/createUser', (req,res) => {
    res.send("User Created");

})

app.post('/handleSum', (req, res) => {
    // var counter = req.query.counter;
    // console.log(req.headers);
    console.log(req.body)
    var counter = req.headers.counter;
    var name = req.query.name;
    var calculatedSum = calculate(counter);
    console.log(calculatedSum);
    var ans = "Hello "+ name + ", the sum is " + calculatedSum;
    res.send(ans);
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})