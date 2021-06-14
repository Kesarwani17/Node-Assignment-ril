// leavebalance route

const attendanceDetails = require('../data/data')

function leaveBalance (req,res){
    try {
        res.send((attendanceDetails.leavebalance))
    } catch(e) {
        res.send(400).send(e)
    }
}

module.exports.leaveBalance = leaveBalance