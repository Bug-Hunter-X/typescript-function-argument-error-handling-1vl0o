function greeter(person: string): string {
  return "Hello, "+ person + "!";
}

function greeterArray(people: string[]): string {
  let message = "";
  for (let person of people){
    message += "Hello, "+ person + "!\n";
  }
  return message;
}

let user = ["Jane User", "John Smith"];
console.log(greeter(user[0]));
console.log(greeterArray(user));