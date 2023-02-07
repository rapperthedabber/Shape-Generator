//require("./dist/index.html");
module.exports = generateMarkdown;

//const shapeText = document.getElementById("shapeText")
//const shapeDiv = document.getElementById("shape")
function render(data1,data2){
    if(data1 != "none" && data2 == !"none"){
    return `<${data1} cx="125" cy="125" r="75" fill=${data2} />`

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
        
    ${render(data.Shape, data.color)}
    <p class ="first-txt">${data.text}</p>
    <style>
    .first-text {
        position: absolute;
        top: 17px;
        left: 50px;
    }
    </style>
    
        
        </svg>
    </body>
    </html>` ;

   
    
    


}

