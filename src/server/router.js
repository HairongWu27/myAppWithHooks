'use strict';
const express    = require('express');
const router     = express.Router();
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
//var cookieParser = require('cookie-parser');



const app = express();
app.use(bodyParser.json());

const { EmployeeSchema, UserSchema, PostSchema } = require('./schema');
//const UserSchema = require('./schema');

const user = mongoose.model('user', UserSchema, 'user');
const employee = mongoose.model('employee', EmployeeSchema, 'employee');
const post = mongoose.model('post', PostSchema, 'post');

router.get('/', (req, res) =>{
    res.json({ message: 'welome to Here root of router' });
});

router.get('/employee/all', (req, res) =>{
    res.json({ message: 'welome to Here employee all' });
});

router.get('/student', (req, res) =>{
    const UserSchema     = new Schema({
        
    });
    const newUser = new user({
        FirstName: "Bob",
        LastName: "Down",
        Sex: "male",
        Age: 32
    })
    newUser.save(function(err) {
        if (err) {
            console.log("save user  error");
            res.send(err);
        }
        res.json({ message: 'user updated', studentA: 'AAA', studentB: 'BBB', studentC: 'CCC'});
    })
    //res.json({ studentA: 'AAA', studentB: 'BBB', studentC: 'CCC' });
});

// router.put();
// router.post();
// router.delete('/user/:user_id', (req, res)=>{
//     UserModel.remove({
//         _id: req.params.user_id
//     }, (err, ) =>{
//         if (err) res.send(err);
//         res.json({message: 'successfully deletes'})
//     })
// });

module.exports = router;