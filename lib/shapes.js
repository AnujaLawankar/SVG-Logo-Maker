
// parent class shape
class Shapes {
    constructor(color) {
        this.color = '';


    }

    setcolor(color) {
        this.color = (color);

    }




}
// child class inherites from parent class shape
class Circle extends Shapes {
    constructor(color) {
        //inherite variable
        super(color);


    }

    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`;

    }

}
// child class inherites from parent class shape
class Rectangle extends Shapes {

    constructor(color) {
        //inherite variable
        super(color);


    }

    render() {
        return `<rect x="50" y="50" width="100%" height="50%" points="0,0 100,0 100,50 0,50" fill="${this.color}"></rect>`;
    }

}
// child class inherites from parent class shape
class Triangle extends Shapes {

    constructor(color) {
        //inherite variable
        super(color);
    }


    render() {

        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"></polygon>`;
    }
}

// child class inherites from parent class shape
class Square extends Shapes {


    constructor(color) {
        //inherite variable
        super(color);

    }


    render() {

        return `<rect x="50" y="50" height="200%" width="200%" fill="${this.color}"></rect>`;
    }
};


// exporting the class out of the file
module.exports = { Circle, Rectangle, Triangle, Square }


