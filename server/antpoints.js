const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const formData = require('express-form-data');

const antpoints = (app) => {
    app.use(cors())
    app.use(express.json())
    app.use(formData.parse());
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use('/api/stiker/register' , require('../router/register_stikers'))
    app.use('/api/pris' , require('../router/prises'))
    app.use('/api/winners' , require('../router/winners'))
    app.use('/api/arxivs' , require('../router/arxivs'))
    app.use('/api/stiker-count' , require('../router/stikerCounts'))
    app.use('/api/user' , require('../router/users'))
    app.use('/api/phone' , require('../router/phone'))
}

  
module.exports = antpoints