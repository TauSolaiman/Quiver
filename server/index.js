const express = require('express')
const PORT = 19006
const app = express()

// const RH = require('robinhood-node');
// const rh = new RH({ user: 'RH user', password: 'RH password' });
const RobinHood = require('robinhood-api');
const robinhood = new RobinHood();
console.log('Listcalls', robinhood.listCalls());


  // const account = new rh.Account();
 // console.log(await account.user);

  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
  
  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error')
  })

  // start listening (and create a 'server' object representing our server)
   app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  )


