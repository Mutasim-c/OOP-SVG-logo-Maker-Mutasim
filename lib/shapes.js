class Circle {
    constructor(){
        this.colour;
    }
    setColour(colour){
        this.colour = colour
    }
}
class Triangle {
    constructor(){
        this.colour;
    }
    setColour(colour){
        this.colour = colour
    }
}class Square {
    constructor(){
        this.colour;
    }
    setColour(colour){
        this.colour = colour
    }
}

module.exports = {
    Square: Square,
    Triangle: Triangle,
    Circle: Circle
};
//module.exports = Shape;