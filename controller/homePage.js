// leavebalance route

function homePage (req,res){
    res.send(`Goto, <br> <a href=/absentDays>/absentDays<a> for count of absent days, 
    <br> <a href=/absentDetails>/absentDetails<a> for details of absent Dates, 
    <br> <a href=/leavebalance>/leavebalance<a> for Balance leave details and 
    <br> <a href=/holidayCalander>/holidayCalander<a> to view holidays`)
}

module.exports.homePage = homePage