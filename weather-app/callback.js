const add = (num1, num2, callback)=>{
    setTimeout(() => {
        const sum = num1+num2;
        callback(sum);
    }, 2000);
}

add(1,4,(res)=>{
    console.log(res);
})
