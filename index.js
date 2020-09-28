const express = require('express')


const app = express()



app.get('/', (req, res) => {
    const fruit  ={
        product: 'kola',
        price: '500'
    }

    res.send(fruit)

  
// res.send('Node ami onek pari')
// res.send('Node ami onek pari parbo,patei hobe')
      })

      app.get('/fruit/banana', (req, res) => {
    

        res.send({fruit: 'banana', quantity: 100, price:1000})   
    })   

// app.listen(3000, () => console.log('Listening to port 3000'))
app.listen(4200, () => console.log('Listening to port 4200'))





// const express = require('express')


// const app = express()

// // function  rootCall(req, res)
// // res.send('hello world')

// //  const rootCall =(req, res) =>res.send('hello world')


// // app.get('/', rootCall)

// // app.get('/', function (req, res) {
// //     res.send('hello world')
// //   })

// app.get('/', (req, res) => {
// //    res.send('hello world')
// res.send('hello world of Node ')
//       })

// // app.listen(3000, () => console.log('Listening to port 3000'))
// app.listen(4000, () => console.log('Listening to port 4000'))