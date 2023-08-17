const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json());

function calculate(counter) {
    var sum = 0;
    for (var i = 0; i < counter; i++) {
        sum += i;
    }
    return sum;
}

app.get('/handleSum', (req, res) => {
    var counter = req.query.counter;
    var calculatedSum = calculate(counter);
    var answerObject = {
        sum: calculatedSum
    }
    res.send(answerObject);
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})