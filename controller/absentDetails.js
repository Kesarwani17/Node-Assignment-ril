// absentDetails route

const attendanceDetails = require('../data/data')

function absentDetails (req,res){
    try {
        res.send(attendanceDetails.absentDays)
    } catch(e) {
        res.send(400).send(e)
    }
}

module.exports.absentDetails = absentDetails