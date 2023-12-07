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
      it('should return svg script for circle with same colour set before',() =>{
        const circle = new Shape.Circle();
        circle.setColour('purple');
        expect(circle.render()).toEqual('<circle cx="150" cy="115" r="80" fill="purple" />');
      })
      it('should return svg script for triangle with same colour set before',() =>{
        const shape = new Shape.Triangle();
        shape.setColour("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
        it('should return svg script for square with same colour set before',() =>{
            const square = new Shape.Square();
            square.setColour('purple');
            expect(square.render()).toEqual('<rect x="75" y="40" width="150" height="150" fill="purple" />');
            })
})
