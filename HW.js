let numbers = [34, 51, 12, 41],
    secNumbers = [],
    trdNumbers = [];

function firstWaterFall (arr) {
    let chArr = []
    for (let i = 0; i < arr.length; i++){
    chArr.push(arr[i] + 6)
}
    return (chArr)
}
secNumbers = (firstWaterFall(numbers)) //передаем значения функции firstWaterFall в переменную secNumbers для дальнейшего преобразования
function secondWaterFall (arr) {
    let chArr = [];
    for(let i = 0; i < arr.length; i++){
    chArr.push(arr[i]*4)
    }
    return(chArr)
}
trdNumbers = secondWaterFall(secNumbers); //аналогично с прошлым коментариемб, передаем переменную
function thirdWaterFall (arr) {
    let chArr = [];
    for(let i = 0; i < arr.length; i++){
        chArr.push(Math.round(arr[i]/3))
    }
    return(chArr)
}
finalResult = thirdWaterFall(trdNumbers);

console.log(numbers)
console.log(secNumbers)
console.log(trdNumbers)
console.log(finalResult)