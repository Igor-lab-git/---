
/*--------------------1. Вывести сумму чисел от 1 до N----------- */

function numberSum(N) {
  let total = 0;
  for(i = 1; i <= N; i++){
  total += i;
  }
  return total;
 }
 console.log(numberSum(5));


 /*-----------------------2. Вывести факториал числа N----------- */

 function fact(x) {
    
  for(let i = x; --i; ) {
      x *= i;
  }
  return x;
}
console.log(fact(5));

/*-------------------Вывести четные и нечетные числа от 1 до 100--------*/


function even() {
  for (let i = 1; i<= 100; i++)
      if (i % 2 == 0) {
          console.log('Четное ' + i);
      }
      else {
          console.log('Нечетное ' + i);
      }
  }

even();



/*------------4. Вывести проверку на простое число--------------- */


function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
} console.log(isPrime(2));

/*------------5. Вывести таблицу умножения для числа N------------*/


function a (v) {

  for (let i = 1; i <= 10;  i++) {
  
      console.log(`${i} x ${v} = ${i * v}`);
    
    
  }
  }console.log(a(5));
/*------------6. Вывести сумму цифр числа N-------------- */

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log( sumTo(3) );

  /*--------------------7. Обратное число-------------------*/

  function flipInt(n){
    let digit, result = 0
    while( n ){
        digit = n % 10 
        result = (result * 10) + digit 
        n = n/10|0  
    }
    return result
}
console.log(flipInt(123));

  /*--------------------8. Количество цифр в числе N------------*/

  function a (num) {

    var quantity = 1;
    while (num >=10 ) {
        num = Math.round(num) / 10;
        quantity++ 
    }
      return quantity
    }
    console.log(a(112312));

    /*-----------9. Проверка палиндрома для числа N----------*/

    function palin (a) {
      let numst = a.toString();
      let res = numst.split("").reverse().join("");
      return numst === res;
     }
     console.log(palin(22));

  
  
