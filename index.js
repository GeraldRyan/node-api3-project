// code away!
const express = require("express")
const server = require("./server")
// const postRouter = require("./postrouter")

server.get("/", (req, res)=>{
  res.send("Server is running")
})

// server.use("/api/posts", postRouter)  // passes postRouter as the function argument. Is this middleware? postRouter is imported from our own file. 

// server.listen(5000)