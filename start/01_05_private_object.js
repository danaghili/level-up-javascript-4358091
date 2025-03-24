// Write your code here
const username = Symbol("username")
const password = Symbol("password")

const user = {
  [username]: "danaghili",
  [password]: "password",
  age: 38
};

console.log (user.username)
console.log(user.password)
