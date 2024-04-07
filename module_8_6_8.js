// Создайте функцию getMaxNumber, которая будет принимать массив 
// чисел в качестве параметра и возвращать максимальное число из массива. 
// Используйте метод apply, чтобы вызвать функцию getMaxNumber с передачей 
// массива чисел в качестве второго аргумента.
function getMaxNumber(arr){
  return Math.max.apply(null,arr)
}
let num = [1,2,3,4,5]
console.log(getMaxNumber(num))