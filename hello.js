const sayHello = function (name) {
  console.log("Hello, " + name);
}
sayHello("Alison");

const returnSayHello = function (name) {
  return "hello, " + name;

}
const greeting = returnSayHello("Alison");
 console.log(greeting);
 