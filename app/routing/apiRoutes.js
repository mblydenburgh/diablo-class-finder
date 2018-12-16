const path = require('path');
const classes = require('../data/classes');

module.exports = function(app){
    app.get('/api/classes',function(req,res){
        console.log(classes);
       res.send(classes); 
    });

    app.post('/api/classes',function(req,res){
        const userData = req.body.form;
        console.log(userData);
        // console.log(queryClasses(userData));
        res.send(queryClasses(userData));
    });

    function queryClasses(data){
        console.log(`Querying Classes...`);
        console.log(classes);
        let name = data.shift(); // throw away name
        // console.log(name);
        //convert received form data from array of strings to array of numbers
        let numData = data.map(num=>Number(num));

        //  map through all app data to find score differences, store them in an array
        const scoreDifferences = classes.data.map(item=>{
            // loop through each class's score array
            // console.log(`current item`);
            // console.log(item);

            // use reduce to take the scores array and reduce to single difference value for each class
            // this is done by subtracting the current array value by the [reduce index], since both arrays are
            // the same length
            const difference = item.scores.reduce((sum,score,index)=>{
                // console.log(`Calculating ${score} - ${numData[index]}`);
                sum += Math.abs(score-numData[index]);
                return sum;
            },0);

            //return the difference of each array compared to user's input
            return difference;
        });
        console.log(scoreDifferences);
        // find the minimum value in the differences array
        const lowestDifference = Math.min(...scoreDifferences);
        // get the index of the lowest value
        const matchingIndex = scoreDifferences.indexOf(lowestDifference);
        console.log(`Sending match: ${classes.data[matchingIndex].name}`)
        const result = classes.data[matchingIndex];
        return result;

    }
};