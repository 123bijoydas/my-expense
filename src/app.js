const express=require("express");
require("./db/conn");
const Expenses=require("./models/expense");
const app=express();
const port=process.env.PORT||8000;
app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("hello from the server by bijoy");
// })

app.post("/expenses",async(req,res)=>{
    console.log(req.body);
    try{
        const user=new Expenses(req.body);

        const createUser=await user.save();
         res.status(200).send(createUser);
    }
     catch(err){
        res.status(404).send(err.message);
    }
    // res.send("hello from the server");
});

app.get("/expenses",async(req,res)=>{
    console.log(req.body);
     try{
          const ExpensesData = await Expenses.find();
          res.send(ExpensesData);
     }catch(e){
        console.log(e.message);
     }
})

app.listen(port,()=>{
    console.log(`connection is setup ${port}`)
})

// https://my-expense.herokuapp.com/ | https://git.heroku.com/my-expense.git