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

function calculateMul(counter) {
    var mul = 1;
    for (var i = 1; i < counter; i++) {
        mul *= i;
    }
    return mul;
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
    // console.log(req.body)
    // var counter = req.headers.counter;
    var counter = req.body.counter;
    if (counter < 100000) {
        var name = req.query.name;
        var calculatedSum = calculate(counter);
        var calculatedMul = calculateMul(counter);
        var answerObject = {
            sum: calculatedSum,
            mul: calculatedMul
        }
        // var ans = "Hello "+ name + ", the sum is " + calculatedSum;
        res.send(answerObject);
        // res.json(answerObject);
    } else {
        res.status(401).send("You have sent a very big number.");
    }
})

function givePage(req, res){
    // res.send(`
    // <!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <title>Hello from page</title>
    //     </head>
    //     <body>
    //         <b>Hi there!</b>
    //     </body>
    // </html>
    // `)
    res.sendFile(__dirname+"/index.html")
}

app.get('/',givePage)
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})