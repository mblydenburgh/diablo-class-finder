const classes = {
    data: [
        {
            name:'Witchdoctor',
            scores:[1,4,2,2,5,3,2,2,3,3]
        },
        {
            name:'Barbarian',
            scores:[5,1,3,3,2,1,1,5,4,1]
        },
        {
            name:'Wizard',
            scores:[1,5,3,1,3,2,3,3,3,4]
        },
        {
            name:'Monk',
            scores:[4,2,4,5,2,3,5,3,4,1]
        },
        {
            name:'Demon Hunter',
            scores:[2,2,1,2,3,3,1,1,5,5]
        },
        {
            name:'Crusader',
            scores:[4,3,5,1,1,1,4,4,1,1]
        },
        {
            name:'Necromancer',
            scores:[1,5,1,3,4,5,3,1,2,3]
        }
    ]
}

const serveData = () => {
    return classes;
}

module.exports = serveData();