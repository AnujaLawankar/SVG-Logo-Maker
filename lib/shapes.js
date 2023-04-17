class Shapes {
    constructor(color) {
        this.color = '';


    }

    setcolor(color) {
        this.color = (color);

    }




}

class Circle extends Shapes {
    // constructor(color) {
    //     super(color);


    // }

    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`;

    }

}

class Rectangle extends Shapes {


    render() {
        return `<rect x="0" y="0" width="100" height="50" points="0,0 100,0 100,50 0,50" fill="${this.color}">`;
    }

}

class Triangle extends Shapes {

    // constructor(color) {
    //     super(color);
    // }


    render() {

        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`;
    }
}

class Polygon extends Shapes {

    // constructor(color) {

    //     super(color);


    // }

    render() {

        return `<polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" height="100%" width="100%" fill="${this.color}">`;
    }


}

class Square extends Shapes {

    // constructor(color) {
    //     super(color);

    // }


    render() {

        return `<rect x="50" height="200" width="200" fill="${this.color}">`;
    }
};

module.exports = { Circle, Rectangle, Triangle, Polygon, Square }

















//




// 