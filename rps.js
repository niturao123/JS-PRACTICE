document.addEventListener("click", ()=>{
document.body.style.background = randomcolor();
})

function randomcolor() {
    const color= ["Pink","Orange","Yellow","black","Green","Blue","Red","Skyblue","Purple","aqua","Brown"]
    return color [Math.floor(Math.random()*color.length)];
}