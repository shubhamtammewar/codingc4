const {Schema,model}=require('mongoose');
const seatSchema=new Schema({
    show:{type:Schema.Types.ObjectId,ref:"show",required:true},
},
    {
        versionKey:false,
        timestamp:true,
    }
)
module.exports =model("seat",seatSchema)