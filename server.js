import express from "express";
 const server = express();
 server.use("/",express.static("./static"))
 server.use(express.json());
 server.use(express.urlencoded({
    extended:true
 }))

 server.get("/api",(req,res)=>{
   console.log(data);
    res.json("hello");
 })
server.post("/api",(req,res)=>{
    console.log(req.body);
    res.json("post api");
})






// let list = [];
//  server.get("/set-todo",(req,res)=>{
    
//     console.log(req.query);
   
//     list.push(query);

//  })
//  server.get("/get-todo",(req,res)=>{
//     res.json(list);
//  })
//  server.get("/del-todo",(req,res)=>{
//     let todoDelete = req.query.todo;
//     list = list.filter((item) => item.todo!==todoDelete);

 server.listen(3000,(error)=>{
    if(error){
        console.log(error);
    }
    console.log(`server started on port :3000`);
 })
 




   

    