const Circle = require('./shapes.js');
describe('Validate', () => {
    it('setcolour should give it to the colur attribute',() =>{
        const colour = 'blue';
        const circle = new Circle();
        console.log(circle);
        circle.setColour('blue');
        expect(circle.colour).toEqual(colour)
      })
})
