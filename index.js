// !Task-1
// let a = 5;
// let b = 6;
// ? Method-1 Swapping values using a temporary variable
// let temp = a;
// a = b;
// b = temp;
// ?Method-2
// [a, b] = [b, a];
// console.log(a, b);

// !Task-2(Car) 1l for 5km

// function wayToRoad(car, capacity) {
//   let calc = `Model: ${car}
// Max km: ${capacity * 5}km`;
//   console.log(calc);
// }
// wayToRoad("Bmw", 50);
// wayToRoad("Mercedes", 60);
// wayToRoad("Audi", 70);

// !Task-3 Alert

let login = prompt("IngressAcademy");
let passwordLogin = prompt("Ingress12345");

let username = prompt("Write your name");
let password = prompt("Write your password");

console.log(username, password, login, passwordLogin);
if (login == username) {
  alert("Equal");
} else {
  alert("Not equal");
}

if (passwordLogin == password) {
  alert("SamePassword");
} else {
  alert("DifferentPassword");
}
