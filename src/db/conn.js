const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://myexpenses:987654321@cluster0.0t1yy.mongodb.net/?retryWrites=true&w=majority")
// mongoose.connect("mongodb://localhost:27017/my-expense-report-api")
.then(()=>{
    console.log("conntection successful");
}).catch((err)=>{
    console.log("no connection");
});