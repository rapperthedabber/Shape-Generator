//const renderRectangle = require("../utils/generateMarkdown");
const generateMarkdown = require("../utils/generateMarkdown");
const renderCircle = require("../utils/generateMarkdown");
//const renderRectangle = require("../utils/generateMarkdown")


test("It should render html page", () => {

    const Circle = "Circle";
    expect(generateMarkdown(Circle)).toBe(
        `
        <Circle cx="125" cy="125" r="75" fill=Green />
        -         
        -        
        + <!DOCTYPE html>
        +     <html lang="en">
        +     <head>
        +         <meta charset="UTF-8">
        +         <meta http-equiv="X-UA-Compatible" content="IE=edge">
        +         <meta name="viewport" content="width=device-width, initial-scale=1.0">
        +         <title>Document</title>
        +         
        +     </head>
        +     <body>
        +     <svg width="391" height="391" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        +     <g opacity="0.8">
        +         
        +     
        +     
        +     undefined
        +     
        +   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">undefined</text>
        +
        +
        +     
        +         
        +         </svg>
        +     </body>
        +     </html>
    
        
       ` )
})


