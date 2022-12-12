const classInfo = module.exports

classInfo.get = ((req,res)=>{
    res.json({data:req.query.section, code:200})
})