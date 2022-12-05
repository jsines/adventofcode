const fs = require('fs');

const file = fs.readFileSync('./input.txt', 'utf8');
const valueArray = file.split('\n');

const getTopThree = (x) => {
    let i = 0;
    let topThreeQueue = [];
    const push = (queue, cur) => {
        queue.push(cur);
        queue.sort((a,b) => a-b);
        if (queue.length > 3)
            queue.shift();
    }
    let currentTotal = 0;
    while (i < x.length) {
        if (x[i] !== '') {
            const cur = parseInt(x[i]);
            currentTotal += cur;
        } else {
            push(topThreeQueue, currentTotal);
            currentTotal = 0;
        }
        i+=1;   
    }
    return topThreeQueue;
}
const x = getTopThree(valueArray);
console.log(`Sum of top 3: ${x.reduce((pre, cur) => pre+cur, 0)}`)
console.log(x);