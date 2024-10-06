// # description -> HTTP VERB -> Accesss -> Access Type
// # get all drivers -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/drivers
exports.getDrivers=(req,res)=>{
    res.send("admin get all drivers")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get single driver -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/drivers/:driverId
exports.getDriver=(req,res)=>{
    res.send("admin get single driver")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # active driver -> PUT -> SUPER Admin -> PRIVATE
// @route = /api/admins/drivers/:driverId/active-driver
exports.activeDriver=(req,res)=>{
    res.send("admin active driver")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # active driver -> PUT -> SUPER Admin -> PRIVATE
// @route = /api/admins/drivers/:driverId/deactive-driver
exports.deactiveDriver=(req,res)=>{
    res.send("admin deactive driver")
}



