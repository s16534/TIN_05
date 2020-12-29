const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    created:{
        type:Date,
        default: Date.now
    },
    name:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
});

const TodoApp = module.exports = mongoose.model('todo-app',todoSchema)
module.exports.get = (callback,limit)=>{
    TodoApp.find(callback).limit(limit);
}