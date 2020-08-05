class Computer {
    constructor(cpu, ram, storage) {
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
    }
    runProgram(str) {
        console.log("running: " + str);
    }
}

class Laptop extends Computer{
    constructor(cpu, ram, storage, battery) {
        super(cpu, ram, storage);
        this.battery = battery;
    }
    carryAround() {
        console.log("carrying laptop:  cpu" + this.cpu +" ram: " 
        + this.ram + " storage: " + this.storage + " battery: " + this.battery);
    }
}
