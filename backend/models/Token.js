var mongoose=require("mongoose")
var schema=mongoose.Schema

var token=new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    token:{
        type:Number,
        required:true,
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'pending'
    }
})

var Token=mongoose.model('Tokens',token)