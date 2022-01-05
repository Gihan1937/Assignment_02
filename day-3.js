
let numbers = [1, 2, 3, 4, 5]

console.log("forEach")
function myEach(item) {
    for(let i = 0; i < item.length; i++){
        console.log(item[i],i,item)
    }
}
myEach(numbers)


console.log("map")
function myMap(arr){
    const newArr = [];
    for(let i = 0; i < arr.length; i++)
        newArr.push((arr[i]) * 2 )
    return newArr
}
console.log(myMap(numbers))


console.log("filter")
function myFilter(item) {
    const arr = []
    for (let i = 0; i < item.length; i++){
        if ((item[i].length > 6))
            arr.push(item[i])
    }
    return arr
}
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
console.log(myFilter(words))


console.log("some (aka any)")
function mySome(item){
    for (let i = 0; i < item.length; i++){
        if ((item[i] % 2 == 0))
            return true
    }
        return false
}
console.log(mySome(numbers));


console.log("every")
function myEvery(item){
    for (let i = 0; i < item.length; i++){
        if (!(item[i] % 2 == 0))
            return false
    }
        return true
}
console.log(myEvery(numbers));


console.log("reduce")
function myReduce(arr, cb){
    let result = 0;
    for(let i = 0; i < arr.length; i++)
        result += cb(arr[i]);
    return result;
}
console.log(myReduce(numbers, increment))
function increment(elem){ return elem+1; }


console.log("includes")
function myIncludes(item,target) {
    for (let i = 0; i < item.length; i++) {
        if (item[i] == target)
            return true
    }
        return false
}
console.log(myIncludes(numbers,4))


console.log("indexOf")
function myIndexOf(item,target) {
    for (let i = 0; i < item.length; i++){
        if (item[i] == target)
            return i
    }
    return -1
}
console.log(myIndexOf(numbers, 4))


console.log("push")
function myPush(item, ele) {
    item[item.length] = ele
    return item
}
console.log(myPush(numbers, 9))


console.log("lastIndexOf")
function myUnshift(arr, target){
    for(let i = arr.length; i > 0; i--)
        if(arr[i] === target)
            return i;
    return -1;
}
console.log(myUnshift(numbers, 3))


console.log("object.keys")
function grabKeys(ob){
    let arr=[];
    for(element in ob) {
        arr.push(element);
    }
    return arr;
}
let obj_key_value ={a:10,b:5,c:2};
console.log(grabKeys(obj_key_value));


console.log("object.values")
function grabValues(ob){
    let arr=[];
    for(element in ob)
        arr.push(ob[element]);
    return arr;
}
console.log(grabValues(obj_key_value));
