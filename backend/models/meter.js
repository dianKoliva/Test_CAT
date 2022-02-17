var mongoose=require("mongoose")
var schema=mongoose.Schema

var meter=new schema({
    _id:mongoose.Schema.Types.ObjectId,
    meter_number:{
type:Number,
required:true
    }
    ,
    owner:{
        type:String,
        required:true
    }
})

var Meter=mongoose.model('meter',meter);
module.exports=Meter;