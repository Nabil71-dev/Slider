let preBtn = document.querySelector(".prev_btn")
let nextBtn = document.querySelector(".next_btn")
let slider = document.querySelector(".review_slider")

let childNum = slider.childElementCount;
slider.style.width = ""+(childNum*33.33) +"%"

let nextCounter = 0;

let childWidth = 100/childNum;

console.log(childNum);
console.log(slider)
nextBtn.addEventListener("click",()=>{
    nextCounter++;
    slider.style.transform = "translateX(-"+(childWidth*nextCounter)+"%)"
})
preBtn.addEventListener("click",()=>{
    nextCounter--;
    slider.style.transform = "translateX(-"+(childWidth*nextCounter)+"%)"
})