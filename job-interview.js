var express = require('express')
var app = express()
const service = require('./service')

// wait 5 sec before listenings
service.waitForService(5000,3).then(() => {
    app.listen(3030, () => {
        console.log('listening on port 3030')
    })
}).catch(console.log)