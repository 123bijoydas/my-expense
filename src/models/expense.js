const mongoose=require("mongoose");
const expensesSchema=new mongoose.Schema({
    title:{
        type:String
    },
    amount:{
        type:Number
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// we will create a new collection
const Expenses=new mongoose.model("Expenses",expensesSchema);
module.exports=Expenses;