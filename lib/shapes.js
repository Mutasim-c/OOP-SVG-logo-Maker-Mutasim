class Shape {
    constructor(){
        this.colour;
    }
    setColour(colour){
        this.colour = colour
    }
}

class Circle extends Shape{
    constructor(colour){};
}

// module.exports = {
//     method: function() {},
//     otherMethod: function() {},
// };
module.exports = Shape;