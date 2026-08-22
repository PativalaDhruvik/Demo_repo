import dotenv from 'dotenv';
import express from 'express'
function main(){
    test = setTimeout(() => {
        console.log(1)
    }, 2000);

    console.log(test)
}
const app = express()
dotenv.config()

const port =  process.env.port
const app_name = process.env.App_name

app.get('/',()=>{
    res.send(` App name : ${app_name} \n App Port ${port}`)
})

app.listen(port,()=>{
    console.log(` our app is running on http://localhost:${port}`)
})