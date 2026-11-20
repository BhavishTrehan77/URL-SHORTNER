import express from 'express'

const app=express()


app.use(express.json())



app.get("/health",async(req,resp)=>{
 resp.json({
    status: "ok"
  });
})



app.listen(3000)




