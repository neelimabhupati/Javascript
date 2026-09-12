// let myObject = {
//     'name': 'Flo',
//     'age': 46, 
//     // 'job1':{
//     //     'name': 'Neelima',
//     //     'title': 'AI front-end developer'
//     // },

//     'logJob': function (number) {
//         console.log('Neelima ' + number);
//     },
//     'good_girl': true,
// };

// // let myVar = 'job1';

// // console.table(myObject);

// myObject.logJob(233);
// output Neelima 233

let myObject = {
    'name': 'Flo',
    'age': 45,
    'job': 'Neelima',
    'good_girl': true,
};

let objKeys = Object.keys(myObject)
console.table(objKeys);

let ourarray = []

for (let index = 0; index < objKeys.length; index++) {
    const element = objKeys[index];
    ourarray.push(myObject[objKeys[index]])   
}

console.table(ourarray);
