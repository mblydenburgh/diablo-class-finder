const path = require('path');

module.exports = function(app){
    app.get('/survey',function(req,res){
       res.send("in survey"); 
    });
};