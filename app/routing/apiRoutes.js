const path = require('path');
const classes = require('../data/classes');

module.exports = function(app){
    app.get('/api/classes',function(req,res){
        console.log(classes);
       res.send(classes); 
    });

    app.post('/api/classes',function(req,res){
        console.log(req.body);
        const userData = req.body.form;
        console.log(userData);
        res.send(queryClasses(userData));
    });

    function queryClasses(data){
        console.log(`Querying Classes...`);
        console.log(classes);
        let name = data.shift(); // throw away name
        console.log(name);
        let numData = data.map(num=>Number(num));
        console.log(`Input: ${typeof numData[0]}`);
        //  function to loop through all app data
        const scoreDifferences = classes.data.map(item=>{
            // loop through each class's score array
            console.log(`current item`);
            console.log(item);

            // use reduce to take the scores array and reduce to single difference value for each class
            // this is done by subtracting the current array value by the numData[reduce index], since both arrays are
            // the same length
            const difference = item.scores.reduce((sum,score,index)=>{
                console.log(`Calculating ${score} - ${numData[index]}`);
                sum += Math.abs(score-numData[index]);
                // console.log(sum);
                return sum;
            },0);

            //return the difference of each array compared to user's input
            console.log(difference);
            return difference;
        });
        console.log(scoreDifferences);
    }
};