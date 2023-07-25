const express = require('express')
const app = express()
const port = 3000

function calculate(counter) {
    var sum = 0;
    for (var i = 0; i < counter; i++) {
        sum += i;
    }
    return sum;
}


app.get('/handleSum', (req, res) => {
    var counter = req.query.counter;
    var name = req.query.name;
    var calculatedSum = calculate(counter);
    console.log(calculatedSum);
    var ans = "Hello "+ name + ", the sum is " + calculatedSum;
    res.send(ans);
  })

app.post('/createUser', (req,res) => {
    res.send("User Created");

})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})