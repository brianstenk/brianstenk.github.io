
let CAR = (function () {
    let speed = 0;
    let direction = 0;
    return {
        gasPaddle: function () {
            if (speed <= 120){
                speed += 5;
            }
            else{
                speed = 120;
            }
        },
        break: function () {
            if (speed >= 0){
                speed -= 10;
            }
            else{
                speed = 0;
            }
        },
        turnLeft: function(degrees) {
            direction -= degrees;
        },
        turnRight: function(degrees) {
            direction += degrees;
        },
        status: function() {
            console.log("The car is driving direction " + direction + " at " + speed + "mph")
        }
    };
})();


function Computer(ram, cpu, storage) {
    this.ram = ram;
    this.cpu = cpu;
    this.storage = storage;
}
//To preserve the inheritance chaining
Computer.prototype.runProgram = function(string) {
    console.log("running program" + string);
};

function Laptop(ram, cpu, storage, battery) {
    this.ram = ram;
    this.cpu = cpu;
    this.storage = storage;
    this.battery = battery;
}
//Laptop extends Computer
Laptop.prototype.__proto__ = Computer.prototype;

//To preserve the inheritance chaining
Laptop.prototype.carryAround = function() {
    console.log("Carrying laptop: cpu " + this.cpu +" ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery);
};

// make sure it works
let laptop = new Laptop("1.6Ghz", "8GB", "1TB", "75%");
laptop.runProgram("Visual Studio Code");
laptop.carryAround();

