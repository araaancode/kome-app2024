// # description -> HTTP VERB -> Accesss -> Access Type
// # get all cooks -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/cooks
exports.getCooks=(req,res)=>{
    res.send("admin get all cooks")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get single cook -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/cooks/:cookId
exports.getCook=(req,res)=>{
    res.send("admin get single cook")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # active cook -> PUT -> SUPER Admin -> PRIVATE
// @route = /api/admins/cooks/:cookId/active-cook
exports.activeCook=(req,res)=>{
    res.send("admin active cook")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # active cook -> PUT -> SUPER Admin -> PRIVATE
// @route = /api/admins/cooks/:cookId/deactive-cook
exports.deactiveCook=(req,res)=>{
    res.send("admin deactive cook")
}



