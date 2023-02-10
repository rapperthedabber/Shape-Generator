//const renderRectangle = require("../utils/generateMarkdown");
const renderCircle = require("../utils/generateMarkdown");
//const renderRectangle = require("../utils/generateMarkdown")


test("It should give you a Green circle", () => {
    const color1 = "Green"
    expect(renderCircle(true, color1)).toBe(`<Circle cx="125" cy="125" r="75" fill=Green />`

    )
})

test("it should give you a Red circle", () => {
    const color2 = "Red";
    expect(renderCircle(true, color2)).toBe(`<Circle cx="125" cy="125" r="75" fill=Red />`)
})

test("it should give you back a Orange Circle", () => {
    const color3 = "Orange";
    expect(renderCircle(true, color3)).toBe(`<Circle cx="125" cy="125" r="75" fill=Orange />`)
})

test("it should render a circle", () => {
    const color4 = "Orange";
    expect(renderCircle(true, color4)).toBe(`<Circle cx="125" cy="125" r="75" fill=Orange />`)
})


