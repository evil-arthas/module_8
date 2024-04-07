// Создайте объект calculator с методами add и subtract, 
// которые будут складывать и вычитать числа соответственно.
// Далее создайте объект numbers с двумя свойствами: x и y. 
// Используйте метод call, чтобы вызвать методы add и subtract объекта calculator от имени объекта numbers.
const calculator = {
  add: function(x,y){
    return x+y
  },
  substract: function(x,y){
    return x-y
  }
}
const numbers = {
  x: 3,
  y: 1
}
const sum = calculator.add.call(numbers, numbers.x, numbers.y)
console.log(sum)
const raz = calculator.substract.call(numbers, numbers.x, numbers.y)
console.log(raz)