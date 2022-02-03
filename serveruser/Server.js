const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoClient=require('mongodb').MongoClient;
const objectId=require('mongodb').ObjectId;
const app=express();
const router=express.Router();
var port=3001;

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
var db;
var dbUrl='mongodb://localhost:27017/';

mongoClient.connect(dbUrl,(err,dbClient)=>{
    if(err) throw err;
    db=dbClient.db('usersdb');
    console.log('Database connected');
});
// app.listen(port);

router.post('/users/create', (req,res)=>{
    const rb=req.body;
    db.collection('users').insert({
        fullname:rb.fullname, username:rb.username, 
        salary:rb.salary, age:rb.age, email:rb.email}, (err,result)=>{
            if(err) throw err;
            console.log('user created');
        });
    });
router.get('/users',(req,res)=>{
    db.collection('users').find({}).toArray((err,UserList)=>{
        if (err) throw err;
        res.send(UserList);
    })
})
router.delete('/users/delete',(req,res)=>{
    db.collection('users').deleteOne({_id: objectId(req.body._id)},
    (err,result)=>{
        if(err) throw err;
        console.log('user deleted');
    })
})
router.put('/users/update',(req,res)=>{
    var rb=req.body;
    console.log(rb._id)
    db.collection('users').updateOne({_id: objectId(rb._id)},
    {$set: {
        fullname:rb.fullname, username:rb.username, 
        salary:rb.salary, age:rb.age, email:rb.email}},(err, result)=>{
            if(err) throw err;
            console.log('user updated');
    });
});
app.use('/api', router);
app.listen(port);
console.log('Server Started')