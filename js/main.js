function testWebP(e){var t=new Image;t.onload=t.onerror=function(){e(2==t.height)},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}function addData(e){for(var t=document.getElementsByTagName("img").getAttribute("src"),s=document.getElementsByTagName("img"),o=0;o<t.length;o++)s[o].setAttribute("src",e+t[o])}function ibg(){$each($("ibg"),(function(e,t){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}function burger(){document.getElementsByClassName("header__burger")[0].classList.toggle("header__burger_active"),document.getElementsByClassName("header-bottom")[0].classList.toggle("header-bottom_active"),document.getElementsByTagName("body")[0].classList.toggle("lock"),document.getElementsByClassName("top-button")[0].classList.toggle("hide"),document.getElementsByClassName("header-top")[0].classList.toggle("header-top_active");for(var e=document.getElementsByClassName("slider__item-link"),t=0;t<e.length;t++)e[t].classList.toggle("hide")}testWebP((function(e){1==e?document.querySelector("body").classList.add("webp"):document.querySelector("body").classList.add("no-webp")})),params="",/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&document.getElementsByClassName("header-bottom")[0].classList.add("header-bottom_for-mobile");var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var t=document.getElementsByClassName("slider__item");e>t.length&&(slideIndex=1),e<1&&(slideIndex=t.length);for(var s=0;s<t.length;s++)t[s].style.display="none";t[slideIndex-1].style.display="block"}showSlides(slideIndex);var $btnTop=$(".top-button");$btnTop.fadeOut(),$(window).on("scroll",(function(){$(window).scrollTop()>=20?$btnTop.fadeIn():$btnTop.fadeOut()})),$btnTop.on("click",(function(){$("html,body").animate({scrollTop:0},150)}));