const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');
const makeCommit = n =>{
    if (n==0) return simpleGit().push()
    const x = random.int(0,54);
    const y = random.int(0,6);
    const filePath = "./data.json";
    const date = moment().subtract(1, 'y').add(1, 'd').add(x, 'w').add(y, 'd').format();
    const data = {
        Date: date
    }
    console.log('Commit Created At: ', date)
    jsonfile.writeFile(filePath, data, ()=>{
        simpleGit().add([filePath]).commit(date, {'--date': date}, makeCommit.bind(this, --n));
    });
};

makeCommit(500)

