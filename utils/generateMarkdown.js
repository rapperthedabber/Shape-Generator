//require("./dist/index.html");
module.exports = generateMarkdown;
module.exports = renderCircle;
//module.exports = renderRectangle;

//const shapeText = document.getElementById("shapeText")
//const shapeDiv = document.getElementById("shape")
function renderCircle(data1,data2){
    if(data1 === true  && data2 !== "none"){
    return `<Circle cx="125" cy="125" r="75" fill=${data2} />`
    }
    {
        return ""
    }
}

function renderRectangle(data1,data2){

 if(data1 === true  && data2 !== "none"){
    return ` <rect x="25" y="25" width="200" height="200" fill=${data2} stroke-width="4" stroke="pink" />`
    }
    {
        return ""
    }
}

function renderTriangle(data1,data2){
    if(data1 === true  && data2 !== "none"){
        return `<svg id="triangle" viewBox="0 0 100 100">
        <polygon points="0 0, 100 0 50 100" fill=${data2} stroke="red"/>
  </svg>`
    }
}



function generateMarkdown(data){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        
    </head>
    <body>
    <svg width="391" height="391" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g opacity="0.8">
        
    ${renderCircle(data.Circle, data.color)}
    ${renderRectangle(data.rectangle, data.color)}
    ${renderTriangle(data.triangle, data.color)}
    
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.text}</text>


    
        
        </svg>
    </body>
    </html>` ;

   
    
    


}

