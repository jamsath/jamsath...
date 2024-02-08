const mongoose = require("mongoose")

//connection
mongoose.connect("mongodb+srv://pkmuhamed1:1234@cluster0.6dwu3gi.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")
})
.catch(err=>console.log(err))

let mongoschem = mongoose.Schema

const Employeeschema = new mongoschem({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number

})

var employeemodel = mongoose.model("employee",Employeeschema)
module.exports = employeemodel