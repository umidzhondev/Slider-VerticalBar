const slider = document.querySelector(".slider__boxs");
const [line1, line2, line3, line4] = document.querySelectorAll(".slider__controller-lines div");
const activeBox = document.querySelector(".active");
let slideWidth = document.querySelector(".slider__box").clientWidth;
let count = 0;



line1.addEventListener("click", () => {
    count = 0;
    slider.style.transform = `translateX(-${slideWidth*count}px)`;
    activeBox.style.top = `0`;
    document.body.style.cssText = `
    background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
    `;
})
line2.addEventListener("click", () => {
    count = 1;
    slider.style.transform = `translateX(-${slideWidth*count}px)`;
    activeBox.style.top = `25%`
    document.body.style.cssText = `
    background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
    `;
})
line3.addEventListener("click", () => {
    count = 2;
    slider.style.transform = `translateX(-${slideWidth*count}px)`;
    activeBox.style.top = `50%`
    document.body.style.cssText = `
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    `;
})
line4.addEventListener("click", () => {
    count = 3;
    slider.style.transform = `translateX(-${slideWidth*count}px)`;
    activeBox.style.top = `75%`
    document.body.style.cssText = `
    background-image: linear-gradient(to top, #ff0844 0%, #d9185d 80%);  
    `;
})