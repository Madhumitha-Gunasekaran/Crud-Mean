const mongoose=require('mongoose');
const Employee=new mongoose.Schema({
    Name:{
        type:String
    },
    Age:{
        type:String
    },
    office:{
        type:String
    },
},{

collection:'Employee'

});
const EmployeeModel=mongoose.model('Employee',Employee);
module.exports={EmployeeModel}