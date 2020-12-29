todoModel = require('../models/todoModel')

function displayError(error) {
    if(error) {
        res.render('error',{
            error: err
        })
    }
}

exports.index  = (req, res) => {
    todoModel.get((error, tasks) => {
        if(error) {
            res.render('error',{
                error: error
            })
        } else {
            res.render('todoApp', {
                tasks:tasks || []
            })
        }
    })

};

exports.create  = (req, res) => {
    let newTask = new todoModel();
    newTask.name = req.body.title;
    newTask.save((error) => {
        if(!error) res.redirect('/');
        if(error) displayError(error);
    });
};

exports.completedTask  = (req, res) => {
    todoModel.findById(req.params.id, (error, newTask) => {
        if(error) displayError(error);
        if(!error)  {
            newTask.isCompleted = true;
            newTask.save((error) => {
                if(!error) res.redirect('/');
                if(error) displayError(error);                
            })
        }
    })
};

exports.uncompletedTask  = (req, res) => {
    todoModel.findById(req.params.id, (error, newTask) => {
        if(error) displayError(error);
        if(!error)  {
            newTask.isCompleted = false;
            newTask.save((error) => {
                if(!error) res.redirect('/');
                if(error) displayError(error);                
            })
        }
    })
};

exports.delete  = (req, res) => {
    todoModel.deleteOne({
        _id: req.params.id
    }, (error, task) => {
        if(!error) res.redirect('/');
        if(error) displayError(error);
    })
};

exports.deleteCompletedTasks  = (req, res) => {
    todoModel.deleteMany({'isCompleted': true}, (error, task) => {
        if(!error) res.redirect('/');
        if(error) displayError(error);
    })
};