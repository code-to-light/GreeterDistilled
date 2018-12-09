class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var greeter1 = new Greeter("Hello, world!");
    
document.body.innerHTML = greeter1.greet();
