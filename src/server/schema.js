'use strict';
const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;

const EmployeeSchema  = new Schema({
    name: String,
    Title: String,
    Phone: Number,
    SMS: Number,
    Email: String,
    ManagerName: String
});

const UserSchema     = new Schema({
    FirstName: String,
    LastName: String,
    Sex: String,
    Age: Number
});

const PostSchema     = new Schema({
    PostName: String,
    PostTime: Date,
    Owner: String,
    follower: String
});

module.exports = {
    EmployeeSchema,
    UserSchema,
    PostSchema
};