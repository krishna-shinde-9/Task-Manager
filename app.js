const express =  require('express')
const db =  require('./dataBase')
const app =  express()
const fs = require('fs')
const port = 3000
let path =  require('path')
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')

app.get('/home',(req,res)=>{
 fs.readdir(`./files`,(e,files)=>{
     
        res.render('index',{files:files})
 })


})
app.get(`/files/:filename`,(req,res)=>{

fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){

        res.render('show',{filename:req.params.filename,filedata:filedata})
        
        
})


})

app.post('/home',(req,res)=>{
  
fs.writeFile(`./files/${req.body.filename.split(' ').join('')}.txt`,req.body.area,(e)=>{

  res.redirect('/home')
        
})
console.log(req.body);



        })

app.get(`/delete/:filename`,(req,res)=>{

 fs.unlink(`./files/${req.params.filename}`,(e)=>{
     
      res.redirect('/home') 
  
 })
 

}
)


app.listen(port,()=>{
console.log('listening...');
})
