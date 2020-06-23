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