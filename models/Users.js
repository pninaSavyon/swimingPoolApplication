
const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name: {
    type: String,
    required: true
},
phone: {
    type: String,
    required: true
},
mail: {
    type: String,
    required: true
},
password: {
    type: String,
    required: true,
    uniqe:true
}
})

module.exports=mongoose.model('Users',userSchema);