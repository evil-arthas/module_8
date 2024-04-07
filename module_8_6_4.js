// Создайте функцию multiply, которая будет принимать два числа и возвращать 
// их произведение. Используйте метод bind, чтобы создать новую функцию doubleNumber, 
// которая будет удваивать переданное ей число. Вызовите doubleNumber с параметром 5 и убедитесь, 
// что она возвращает 10.
function multiply(x,y){
  return x*y
}
const doubleNumber = multiply.bind(null,2)
console.log(doubleNumber(5))