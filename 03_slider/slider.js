const upB = document.querySelector('.up-button')
const downB = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainslide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
let activeSlideIndex = 0

const slidescount = mainslide.querySelectorAll('div').length


sidebar.style.top =`-${(slidescount - 1)*100}vh`

upB.addEventListener('click', () => {
    changeSlide('up')
})
downB.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidescount) {
            activeSlideIndex = 0
        }
    }
    if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidescount - 1
        }
    }
    const height = container.clientHeight

    mainslide.style.transform = 
    `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = 
    `translateY(${activeSlideIndex * height}px)`
}