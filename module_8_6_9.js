// Создайте объект person с двумя свойствами: firstName и lastName. 
// Создайте функцию greeting, которая будет принимать один параметр name
// и выводить сообщение вида "Hello, {firstName} {lastName}!"
// с использованием свойств объекта person. Используйте метод apply, чтобы
// вызвать функцию greeting от имени объекта person, передав
// в качестве параметра строку "John".
const person = {
  firstName: "Johnn",
  lastName: "Week"
}
function greeting(name){
  return "Hello"+" "+this.firstName+" "+this.lastName+"!"
}
console.log(greeting.apply(person, ["John"]))