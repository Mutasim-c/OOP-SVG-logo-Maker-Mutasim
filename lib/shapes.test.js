const Shape = require('./shapes.js');
describe('Validate', () => {
    it('should set colour of cirlce attribute',() =>{
        const colour = 'blue';
        const circle = new Shape.Circle();
        circle.setColour('blue');
        expect(circle.colour).toEqual(colour)
      })
      it('should set colour of square attribute',() =>{
        const colour = 'red';
        const square = new Shape.Square();
        square.setColour('red');
        expect(square.colour).toEqual(colour)
      })
      it('should set colour of triangle attribute',() =>{
        const colour = 'purple';
        const triangle = new Shape.Triangle();
        triangle.setColour('purple');
        expect(triangle.colour).toEqual(colour)
      })
})
