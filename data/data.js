const attendanceDetails = {
    absentDaysCount: 9.0,
    absentDays: ["1/6/2021", 
                "2/6/2021", 
                "3/6/2021", 
                "4/6/2021"
                ],
    leavebalance: [{
            leaveType: "Contingency Leaves",
            leavesCount: 6,
            leaveValidity: "31/12/2021"
        },
        {
            leaveType: "Optional Holiday",
            leavesCount: 3,
            leaveValidity: "31/12/2021"
        },
        {
            leaveType: "Special Privilege Leave",
            leavesCount: 10,
            leaveValidity: "31/12/2021"
        }
    ],
    holidayCalander: [{
            holidayDate: "15th August",
            holidayDay: "Sunday",
            holidayFor: "Independence Day"
        },
        {
            holidayDate: "10th September",
            holidayDay: "Friday",
            holidayFor: "Ganesh Chaturthi"
        },
        {
            holidayDate: "2nd October",
            holidayDay: "Saturday",
            holidayFor: "Gandhi Jayanti"
        }
    ]
}

module.exports = attendanceDetails