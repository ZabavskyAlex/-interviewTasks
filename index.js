/*Реализуйте функцию isPrime(), 
которая возвращает true или false, 
указывая, является ли переданное ей число простым.

isPrime(0)                          // false
isPrime(1)                          // false
isPrime(17)                         // true
isPrime(10000000000000)             // false
 */

function isPrime(number){
    if(number < 1) return;
    for(let i = 2; i < number - 1; i++){
        if(!(number % i)){
            return false;
        }
    }
    return true;
 }

 /*Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа. */

function factorial(number, result){
    return number ? factorial(number-1, (result || 1) * number): result;
}
/*Реализуйте функцию isSorted(), которая возвращает true или 
false в зависимости о того, отсортирован ли переданный ей числовой массив. */

function isSorted(arr){
    return arr.reduce((bat, value, index, arr) => {
        const nextValue = arr[index + 1];
        if(value > nextValue && nextValue !== undefined){
            return false;
        }
		return bat;
    }, true)
}

function isSorted(arr){
    return !arr.some((value, index, arr) => arr[index] > arr[index + 1])
}
