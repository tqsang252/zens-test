const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Input list interger: ',(listInt)=>{
    const LIMIT = 4;
    const arrInput = listInt.split(" ");
    const formatData = arrInput.filter(e=>{return e !=''});
    formatData.sort((a, b) => Number(a) - Number(b));
    const minimum = formatData.slice(0,LIMIT).reduce((prev,cur)=>{
        return prev + Number(cur);
    },0)
    const maximum = formatData.slice(formatData.length - LIMIT, formatData.length).reduce((prev,cur)=>{
        return prev + Number(cur);
    },0)
    console.log(`Output: ${minimum} ${maximum}`);
});