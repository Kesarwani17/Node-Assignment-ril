// absentDays route

const attendanceDetails = require('../data/data')

function absentDays(req, res) {
    try {
        res.send('Absent Days: ' + attendanceDetails.absentDaysCount)
    } catch(e) {
        res.send(400).send(e)
    }
}

module.exports.absentDays = absentDays