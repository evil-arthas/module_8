// Есть массив объектов, представляющих собой пользователей, 
// каждый из которых имеет свойство age (возраст). 
// Создайте новый массив, содержащий только тех пользователей, 
// чей возраст больше или равен 18. Затем создайте новый массив,
// содержащий только свойства name (имя) каждого пользователя.
const person1 = {
  name: "kostya", 
  age: 19
}
const person2 = {
  name:"leonid",
  age: 21
}
const animal = {
  name:"medusa", 
  age: 0.5
}
const arrOfObj = [person1,person2,animal]
const filtredArrOfObj = arrOfObj.filter((parametr) => parametr.age >= 18)
console.log(filtredArrOfObj)
const result = filtredArrOfObj.map((argument)=> argument.name)
console.log(result)