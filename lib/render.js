class SVG {
    constructor(){}
    renderSVG (shape, text){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape}
        ${text}      
      </svg>`
    }
}

class Text{
    constructor(text, colour){
        this.text = text;
        this.colour = colour;
    }
    render () {
        return `<text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.colour}">${this.text}</text> `
    }
}

module.exports = {
    Text: Text,
    SVG: SVG
};