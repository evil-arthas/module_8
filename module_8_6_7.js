// Создайте объект person с двумя свойствами: firstName и lastName. 
// Далее функцию getFullName, которая будет возвращать полное имя в 
// формате "firstName lastName". Используйте метод bind, чтобы создать 
// новую функцию logFullName, которая будет выводить полное имя в консоль. 
// Вызовите logFullName, чтобы убедиться, что она работает правильно.
const person =  {
  firstName: "John",
  lastName: "Week"
}
function getFullName(){
  return this.firstName+" "+this.lastName
}
const logFullName = getFullName.bind(person)
console.log(logFullName())