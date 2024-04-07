// Создайте функцию setFullName, которая будет устанавливать 
// свойство fullName у переданного ей объекта. Используйте метод bind, 
// чтобы создать новую функцию setPersonFullName, которая будет устанавливать 
// fullName для объекта person из предыдущего примера. Вызовите setPersonFullName 
// с параметром "John Smith" и убедитесь, что свойство fullName объекта person было 
// изменено соответствующим образом.
function setFullName(item){
  if (item===undefined){
    return this.fullName = this.name + " " + this.secondName
  } else {
    return this.fullName = item
  }
}
const person = {
  name: "Alex",
  secondName: "Dewm",
  fullName: ""
}
const setPersonFullName = setFullName.bind(person)
setPersonFullName()
console.log(person)
setPersonFullName("John Smith")
console.log(person)