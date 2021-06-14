const express = require('express');
const router = express.Router();
const absentDays = require('../controller/absentDays')
const absentDetails = require('../controller/absentDetails');
const homePage = require('../controller/homePage');
const leaveBalance = require('../controller/leaveBalance')
const holidayCalander = require('../controller/holidayCalander')


// absentDays route
router.get('/absentDays', (req,res) => {
    absentDays.absentDays(req, res)
})

// absentDetails route
router.get('/absentDetails', (req,res) => {
    absentDetails.absentDetails(req, res)
})

// leavebalance route
router.get('/leaveBalance', (req,res) => {
    leaveBalance.leaveBalance(req, res)
})

// holidayCalander route
router.get('/holidayCalander', (req,res) => {
    holidayCalander.holidayCalander(req, res)
})

// Common home route for easy navigation in other routes
router.get('/', (req,res) => {
    homePage.homePage(req, res)
})

// Custom route for redirecting to home if wrong/undefined url entered
router.get('*', (req,res) => {
    res.redirect('/');
})

module.exports = router
