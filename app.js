const express = require('express');
const attendanceDetails = require('./data/data')

//added express variable
const app = express();

//Custom port for real or local server
const port = 3000 || process.env.PORT


// absentDays route
app.get('/absentDays', (req,res) => {
    try {
        res.send('Absent Days: ' + attendanceDetails.absentDaysCount)
    } catch(e) {
        res.send(400).send(e)
    }
})


// absentDetails route
app.get('/absentDetails', (req,res) => {
    try {
        res.send(attendanceDetails.absentDays)
    } catch(e) {
        res.send(400).send(e)
    }
})

// leavebalance route
app.get('/leavebalance', (req,res) => {
    try {
        res.send((attendanceDetails.leavebalance))
    } catch(e) {
        res.send(400).send(e)
    }
})

// holidayCalander route
app.get('/holidayCalander', (req,res) => {
    try {
        res.send((attendanceDetails.holidayCalander))
    } catch(e) {
        res.send(400).send(e)
    }
})

// Common home route for easy navigation in other routes
app.get('/', (req,res) => {
    res.send(`Goto, <br> <a href=/absentDays>/absentDays<a> for count of absent days, 
    <br> <a href=/absentDetails>/absentDetails<a> for details of absent Dates, 
    <br> <a href=/leavebalance>/leavebalance<a> for Balance leave details and 
    <br> <a href=/holidayCalander>/holidayCalander<a> to view holidays`)
})

// Custom route for redirecting to home if wrong/undefined url entered
app.get('*', (req,res) => {
    res.redirect('/');
})

//starting server on the required port
app.listen(port, () => {
    console.log('Server is up on ' + port)
})