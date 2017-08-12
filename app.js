const express = require('express');
const multer = require('multer');


const app = express();

app.post('/upload',(req,res)=>{
  console.log('上传的文件',req.files)
})

app.listen(3000,err=>{
  if(err) return console.log(err);
  console.log('测试multer正常运行...');
})