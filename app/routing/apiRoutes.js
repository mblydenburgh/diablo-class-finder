const path = require('path');

module.exports = function(app){
    app.get('/api/friends',function(req,res){
       res.send("in friends API"); 
    });
};