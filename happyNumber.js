const getSum = (total,num ) => {
    return total + (num*num)
}
const happyNumber =(number)=>{
    const spltted = number.toString().split("")
    const sum = spltted.reduce(getSum,0)
    return sum == 1 ?  true : false
}

console.log(happyNumber(10))
console.log(happyNumber(101))