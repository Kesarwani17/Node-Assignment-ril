// leavebalance route

const attendanceDetails = require('../data/data')

function holidayCalander (req,res){
    try {
        res.send((attendanceDetails.holidayCalander))
    } catch(e) {
        res.send(400).send(e)
    }
}

module.exports.holidayCalander = holidayCalander