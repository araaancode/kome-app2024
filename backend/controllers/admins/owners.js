// # description -> HTTP VERB -> Accesss -> Access Type
// # get all owners -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/owners
exports.getOwners=(req,res)=>{
    res.send("admin get all owners")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get single owner -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/owners/:ownerId
exports.getOwner=(req,res)=>{
    res.send("admin get single owner")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # active owner -> PUT -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/owners/:ownerId/active-owner
exports.activeOwner=(req,res)=>{
    res.send("admin active owner")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # active owner -> PUT -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/owners/:ownerId/deactive-owner
exports.deactiveOwner=(req,res)=>{
    res.send("admin deactive owner")
}



