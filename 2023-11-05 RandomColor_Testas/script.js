const btn = document.querySelector(".btn");
const colorCode = document.querySelector(".span")
const body = document.querySelector("body")

const generatorHexColor = ()=> {
    const randomColor = Math.random().toString(16).slice(2,8);
    body.style.backgroundColor = "#" + randomColor

    colorCode.textContent = "#" + randomColor
    
    console.log(randomColor);
}

btn.addEventListener("click", generatorHexColor)

body.addEventListener("mousewheel", generatorHexColor)