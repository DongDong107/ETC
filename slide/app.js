const backBtn = document.querySelector("#back");
const nextBtn = document.querySelector("#next");
const items = document.querySelector("#items");
const item = document.querySelectorAll("#item");

const itemWidth = item[0].clientWidth;
const sliderWidth = item.length;

const spots = document.querySelector("#spots");
const spot = document.querySelectorAll("#spot");

let slideIdx = 0;
let transX = 0;

backBtn.addEventListener("click", () => {
    if(slideIdx === 0 ) return;
    transX += itemWidth;
    spot[slideIdx].classList.remove("active");
    items.style.transform = `translateX(${transX}px)`; 
    slideIdx--;
    spot[slideIdx].classList.add("active");
})

nextBtn.addEventListener("click", () => {
    if(slideIdx === sliderWidth-1) return;
    transX -= itemWidth;
    spot[slideIdx].classList.remove("active");
    items.style.transform = `translateX(${transX}px)`;
    slideIdx++;
    spot[slideIdx].classList.add("active");
})
