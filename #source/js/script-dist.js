function burger() {
  document.getElementsByClassName('header__burger')[0].classList.toggle("header__burger_active");
  document.getElementsByClassName('header-bottom')[0].classList.toggle("header-bottom_active");
  document.getElementsByClassName('header-top__img')[0].classList.toggle("header-top__img_active");
  document.getElementsByTagName("body")[0].classList.toggle("lock");
  document.getElementsByClassName('top-button')[0].classList.toggle("hide");
  document.getElementsByClassName('header-top__txt')[0].classList.toggle("hide");
  document.getElementsByClassName('header-top')[0].classList.toggle("header-top_active");
  var slideLink = document.getElementsByClassName('slider-item__link');
  for (var i = 0; i < slideLink.length; i++) {
    slideLink[i].classList.toggle("hide");
  }
}


var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName('slider-item');
  var dots= document.getElementsByClassName('dot');

  if (n> slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("dot_active")
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("dot_active");
}

var $btnTop = $(".top-button")
$btnTop.fadeOut();
$(window).on("scroll",function() {
    if ($(window).scrollTop() >= 20) {
      $btnTop.fadeIn();
    }else {
      $btnTop.fadeOut();
    }
})

$btnTop.on("click",function() {
  $("html,body").animate({scrollTop:0},150)
});
