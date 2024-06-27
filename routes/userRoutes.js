const express = require('express')
const router =  express.Router();
const mysqlpool = require('../db')
const {getUsers} = require('../controllers/userControllers')

router.get('/list',getUsers)

module.exports = router