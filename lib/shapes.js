class Circle {
    constructor(){
        this.colour;
    }
    setColour(colour){
        this.colour = colour
    }
    render(){
        return `<circle cx="150" cy="115" r="80" fill="${this.colour}" />`
    }
}
class Triangle {
    constructor(){
        this.colour;
    }
    setColour(colour){
        this.colour = colour
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" />`
    }
}class Square {
    constructor(){
        this.colour;
    }
    setColour(colour){
        this.colour = colour
    }
    render(){
        return `<rect x="75" y="40" width="150" height="150" fill="${this.colour}" />`
    }
}

module.exports = {
    Square: Square,
    Triangle: Triangle,
    Circle: Circle
};
//module.exports = Shape;