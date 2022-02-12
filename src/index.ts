class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName + this.lastName + middleInitial + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName + " age: " + person.age;
}
let user = { firstName: "ben", lastName: "wallen", age: 13 };

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
