//importing classes from shapes.js file

const { Circle, Rectangle, Triangle, Square } = require('./shapes');


//checking for circle class cordinates and color
describe('Circle', () => {
    test('render correctly', () => {



        const shape = new Circle();
        var color = ('blue');
        shape.setcolor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"></circle>`);

    });

});


//checking for Rectangle class cordinates and color
describe('Rectangle', () => {
    test('render correctly', () => {



        const shape = new Rectangle();
        var color = ('green');
        shape.setcolor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="50" width="100%" height="50%" points="0,0 100,0 100,50 0,50" fill="${color}"></rect>`);

    });

});


//checking for triangle class cordinates and color
describe('Triangle', () => {
    test('render correctly', () => {



        const shape = new Triangle();
        var color = ('Red');
        shape.setcolor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"></polygon>`);

    });

});



//checking for square class cordinates and color
describe('Square', () => {
    test('render correctly', () => {



        const shape = new Square();
        var color = ('black');
        shape.setcolor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="50" height="200%" width="200%" fill="${color}"></rect>`);

    });

});