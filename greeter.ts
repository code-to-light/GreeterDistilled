class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "Hello, " + this.greeting + "!";
    }
};
//add a comment
var greeter1 = new Greeter("Hello, world!");
    
document.body.innerHTML = greeter1.greet();
