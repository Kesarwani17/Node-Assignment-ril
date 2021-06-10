const express = require('express');
const attendanceDetails = require('./data/data')

const app = express();

const port = 3000 || process.env.PORT

app.get('/absentDays', (req,res) => {
    try {
        res.send('Absent Days: ' + attendanceDetails.absentDaysCount)
    } catch(e) {
        res.send(400).send(e)
    }
})

app.get('/absentDetails', (req,res) => {
    try {
        res.send(attendanceDetails.absentDays)
    } catch(e) {
        res.send(400).send(e)
    }
})

app.get('/leavebalance', (req,res) => {
    try {
        res.send((attendanceDetails.leavebalance))
    } catch(e) {
        res.send(400).send(e)
    }
})

app.get('/holidayCalander', (req,res) => {
    try {
        res.send((attendanceDetails.holidayCalander))
    } catch(e) {
        res.send(400).send(e)
    }
})

app.get('/', (req,res) => {
    res.send(`Goto, <br> <a href=/absentDays>/absentDays<a> for count of absent days, 
    <br> <a href=/absentDetails>/absentDetails<a> for details of absent Dates, 
    <br> <a href=/leavebalance>/leavebalance<a> for Balance leave details and 
    <br> <a href=/holidayCalander>/holidayCalander<a> to view holidays`)
})

app.get('*', (req,res) => {
    res.redirect('/');
})


app.listen(port, () => {
    console.log('Server is up on ' + port)
})