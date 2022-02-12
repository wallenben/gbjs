var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName + this.lastName + middleInitial + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + " age: " + person.age;
}
var user = { firstName: "ben", lastName: "wallen", age: 13 };
//document.body.textContent = greeter(user);
/**let canvas = <HTMLCanvasElement>document.getElementById('gbJS');
if (canvas.getContext) {
  let ctx = canvas.getContext('2d');
  function draw() {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

} else {

}**/
