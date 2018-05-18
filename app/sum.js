const numArr = [1,2,3,4,5,6,7]

function sum (arr) {
    return arr.reduce((accum, num) => {
        return accum + num
    }, 0)
}