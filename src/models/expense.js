const mongoose=require("mongoose");
const expensesSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// we will create a new collection
const Expenses=new mongoose.model("Expenses",expensesSchema);
module.exports=Expenses;