const path = require('path');

module.exports = function(app){
    app.get('/api/classes',function(req,res){
       res.send("displaying api data"); 
    });

    app.post('/api/classes',function(req,res){
        console.log(req);
    });
};