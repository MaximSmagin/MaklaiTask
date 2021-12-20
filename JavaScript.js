function Submit() {
  const num1 = Number(document.getElementById("n1").value);
  const num2 = Number(document.getElementById("n2").value);
  const math = document.getElementById("math").value;

  let result = (math === '+') ? num1 + num2 :
              (math === '-') ? num1 - num2 :
              (math === '*') ? num1 * num2 :
              (math === '/') ? Math.trunc(num1 / num2) :
              'неверное число!' ;

  return result
}
