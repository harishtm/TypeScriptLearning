// Different ways of creating constructors in ts

class Fruit {
    public color: string;
    public shape: string;
    constructor(color:string, shape:string) {
        this.color = color;
        this.shape = shape
    }
}

// The Above code can be wriiten in short (mostly used in Angular)

class FFruit {
    constructor(public color:string, public shape: string){
        this.color = color;
        this.shape = shape
    }
}

// Interface in TypeScript

interface IFruit {
    colour: string;
    shape: string;
    avgweight?: number // to make it optional use "?"
}

// create a variable of type interface

// if any of the property is not defined throws error

let apple: IFruit = {
     colour: "red",
     shape: "round",
     avgweight: 100
}

let mango: IFruit = {
    colour: "yellow",
    shape: "oval"
}

// In the above varibale we have not use avgweight property 