// 47.8
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()


app.use(cors())
app.use(bodyParser.json())   

const users = ["asad", "Moin", "sajeeb", "sajjad", "sakib", "rakib", "raju"]

app.get('/', (req, res) => {
        const fruit  ={
            product: 'kola',
            price: '500'
        }
    
        res.send(fruit)
    })


app.get('/fruit/banana', (req, res) => {
    res.send({fruit: 'banana', quantity: 100, price:1000})   
}) 

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    // console.log(req.query) dorkar nei 
    const name = users[id]
    res.send({id, name})
 }) 

//  post
app.post('/addUser', (req, res)=>{
    // console.log('post req sent')
    // console.log(req.body)
    // console.log('data received', req.body)
    const user = req.body;
    user.id = 50;
    res.send(user)
})

app.listen(4200, () => console.log('Listening to port 4200'))

//47.7
// const express = require('express')
// const cors = require('cors')
// const bodyParser = require('body-parser')

// const app = express()


// app.use(cors())
// app.use(bodyParser.json())   

// const users = ["asad", "Moin", "sajeeb", "sajjad", "sakib", "rakib", "raju"]

// app.get('/', (req, res) => {
//         const fruit  ={
//             product: 'kola',
//             price: '500'
//         }
    
//         res.send(fruit)
//     })


// app.get('/fruit/banana', (req, res) => {
//     res.send({fruit: 'banana', quantity: 100, price:1000})   
// }) 

// app.get('/users/:id', (req, res) => {
//     const id = req.params.id;
//     // console.log(req.query) dorkar nei 
//     const name = users[id]
//     res.send({id, name})
//  }) 

// //  post
// app.post('/addUser', (req, res)=>{
//     // console.log('post req sent')
//     console.log(req.body)
// })

// app.listen(4200, () => console.log('Listening to port 4200'))

//47.6
// const express = require('express')
// const cors = require('cors')

// const app = express()

// app.use(cors())
   

// const users = ["asad", "Moin", "sajeeb", "sajjad", "sakib", "rakib", "raju"]

// app.get('/', (req, res) => {
//         const fruit  ={
//             product: 'kola',
//             price: '500'
//         }
    
//         res.send(fruit)
//     })


// app.get('/fruit/banana', (req, res) => {
//     res.send({fruit: 'banana', quantity: 100, price:1000})   
// }) 

// app.get('/users/:id', (req, res) => {
//     // console.log(req.params)
//     // console.log(req.params.id)
//     // const userId = req.params.id;
//     // const name = users[usersId]

//     const id = req.params.id;
//     console.log(req.query)
//     const name = users[id]
//     res.send({id, name})
//  }) 
// app.listen(4200, () => console.log('Listening to port 4200'))

// 47.5
// const express = require('express')


// const app = express()

   

// const users = ["asad", "Moin", "sajeeb", "sajjad", "sakib", "rakib", "raju"]

// app.get('/', (req, res) => {
//         const fruit  ={
//             product: 'kola',
//             price: '500'
//         }
    
//         res.send(fruit)
//     })


// app.get('/fruit/banana', (req, res) => {
//     res.send({fruit: 'banana', quantity: 100, price:1000})   
// }) 

// app.get('/users/:id', (req, res) => {
//     // console.log(req.params)
//     // console.log(req.params.id)
//     // const userId = req.params.id;
//     // const name = users[usersId]

//     const id = req.params.id;
//     console.log(req.query)
//     const name = users[id]
//     res.send({id, name})
//  }) 
// app.listen(4200, () => console.log('Listening to port 4200'))


// 47.4
// const express = require('express')


// const app = express()



// app.get('/', (req, res) => {
//     const fruit  ={
//         product: 'kola',
//         price: '500'
//     }

//     res.send(fruit)
// // app.listen(3000, () => console.log('Listening to port 3000'))

  
// // res.send('Node ami onek pari')
// // res.send('Node ami onek pari parbo,patei hobe')
//       })

//       app.get('/fruit/banana', (req, res) => {
    

//         res.send({fruit: 'banana', quantity: 100, price:1000})   
//     })   

// // app.listen(3000, () => console.log('Listening to port 3000'))
// app.listen(4200, () => console.log('Listening to port 4200'))





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