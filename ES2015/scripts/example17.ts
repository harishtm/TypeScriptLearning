class Employee{
    constructor(name:string){
        this.name = name;
        console.log(this.name + " Constructor")
    }
}

let emp = new Employee("John");