const express = require('express');
const sp = require('serialport');
const cors = require('cors')
const app = express();
app.use(cors())

app.get('/',async(req,res)=>{
    const data = await sp.list()
    console.log(data)
    res.send({data})
})

app.listen(4000,()=>{
    console.log("Yoo i am started !")
})
