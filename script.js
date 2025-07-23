const changeColorBtn = document.querySelector("button")
const colorCode = document.querySelector("main p");

const decNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]


function randomNumberGenerator() {
    return (Math.floor(Math.random() * 16))

}


function hexColorCode() {
    let hexColorCode = "#"
    
    let count = 0;
    
    while(count <= 5) {
        let randomNum = randomNumberGenerator();
        hexColorCode += decNumbers[randomNum];
        count++;
    }

    return hexColorCode

}



function changeBackground() {
    let hexColor = hexColorCode()
    colorCode.innerHTML = hexColor
    document.body.style.backgroundColor = hexColor;

   
}



changeColorBtn.addEventListener("click", function(){
     changeBackground()
})
