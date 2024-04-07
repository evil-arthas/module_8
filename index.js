// Напишите функцию, которая принимает массив чисел и возвращает 
// новый массив, содержащий только уникальные числа, отсортированные в порядке возрастания.
// filterArrayWithReturningOnlyUniqueValuesAndValuesInAscendingOrder
const arrForTest = [1,1,3,3,5,6,16,2,91,56,88,87,56]
function filterArray(arr){
  let uniqueArray = []
  for (i=0; i<arr.length;i++){
    if (!uniqueArray.includes(arr[i])){
      uniqueArray.push(arr[i])
    }
  }
  // [1, 3, 5, 6, 16, 2, 91, 56, 88, 87]
  let ascendArr = []
  for(i=0;i<uniqueArray.length;i++){
    let maxValueOfRestArray = uniqueArray.reduce((accumulator,currentValue)=>{
      if (accumulator>currentValue){
        return accumulator
      } else {
        return currentValue
      }
    })
    ascendArr[(uniqueArray.length-1-i)] = maxValueOfRestArray
    let index = uniqueArray.indexOf(maxValueOfRestArray)
    delete uniqueArray[index]
  }
  return ascendArr
}
console.log(filterArray(arrForTest))