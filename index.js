const express = require('express')


const app = express()

// function  rootCall(req, res)
// res.send('hello world')

//  const rootCall =(req, res) =>res.send('hello world')


// app.get('/', rootCall)

// app.get('/', function (req, res) {
//     res.send('hello world')
//   })

app.get('/', (req, res) => {
//    res.send('hello world')
res.send('hello world of Node ')
      })

// app.listen(3000, () => console.log('Listening to port 3000'))
app.listen(4000, () => console.log('Listening to port 4000'))