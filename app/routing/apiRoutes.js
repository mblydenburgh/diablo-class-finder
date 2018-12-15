const path = require('path');
const classes = require('../data/classes');

module.exports = function(app){
    app.get('/api/classes',function(req,res){
        console.log(classes);
       res.send(classes); 
    });

    app.post('/api/classes',function(req,res){
        console.log(req);
    });
};