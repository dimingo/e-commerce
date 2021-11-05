var imgBx = document.querySelector('.imgBx');
var slides = imgBx.getElementsByTagName('img');
var i = 0;

function nextSlide() {
            slides[i].classList.remove('active')
            i = (i + 1) % slides.length;
            slides[i].classList.add('active');
            setTimeout(nextSlide, 1000)
        }

function PrevSlide(){
    slides[i].classList.remove('active')
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
console.log("Prevclicked");
}