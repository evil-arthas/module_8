// Напишите функцию, которая принимает массив чисел и возвращает 
// новый массив, содержащий только уникальные числа, отсортированные в порядке возрастания.
// filterArrayWithReturningOnlyUniqueValuesAndValuesInAscendingOrder
const arrForTest = [1,1,3,3,5,6,16,2,91,56,88,87,56]
function filterArray (arr){
  let uniqueSet = new Set(arr)
  let uniqueArr = Array.from(uniqueSet)
  return uniqueArr.sort((a,b) => a-b)
}
console.log(filterArray(arrForTest))