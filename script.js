import { colorData } from "./data.js"

const redGroup = document.getElementById("red-group")
const greenGroup = document.getElementById("green-group")
const blueGroup = document.getElementById("blue-group")

redGroup.innerHTML = colorData.filter(colour => colour.group === "reds").map(colour => {
    return (
        `
        <div class="colour-card" style="background:${colour.color}">
            <p>${colour.color}</p>
            <p>${colour.rgbValue}</p>
            <p>${colour.hex}</p>
        </div>
        `
    )
})

greenGroup.innerHTML = colorData.filter(colour => colour.group === "greens").map(colour => {
    return (
        `
        <div class="colour-card" style="background:${colour.color}">
            <p>${colour.color}</p>
            <p>${colour.rgbValue}</p>
            <p>${colour.hex}</p>
        </div>
        `
    )
})

blueGroup.innerHTML = colorData.filter(colour => colour.group === "blues").map(colour => {
    return (
        `
        <div class="colour-card" style="background:${colour.color}">
            <p>${colour.color}</p>
            <p>${colour.rgbValue}</p>
            <p>${colour.hex}</p>
        </div>
        `
    )
})