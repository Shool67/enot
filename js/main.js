function testWebP(e){var t=new Image;t.onload=t.onerror=function(){e(2==t.height)},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}function addData(e){for(var t=document.getElementsByTagName("img").getAttribute("src"),s=document.getElementsByTagName("img"),n=0;n<t.length;n++)s[n].setAttribute("src",e+t[n])}function ibg(){$each($("ibg"),(function(e,t){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}function burger(){document.getElementsByClassName("header__burger")[0].classList.toggle("header__burger_active"),document.getElementsByClassName("header-bottom")[0].classList.toggle("header-bottom_active"),document.getElementsByClassName("header-top__img")[0].classList.toggle("header-top__img_active"),document.getElementsByTagName("body")[0].classList.toggle("lock"),document.getElementsByClassName("header-top__txt")[0].classList.toggle("hide");for(var e=document.getElementsByClassName("slider-item__link"),t=0;t<e.length;t++)e[t].classList.toggle("hide")}testWebP((function(e){1==e?document.querySelector("body").classList.add("webp"):document.querySelector("body").classList.add("no-webp")})),params="";var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var t=document.getElementsByClassName("slider-item"),s=document.getElementsByClassName("dot");e>t.length&&(slideIndex=1),e<1&&(slideIndex=t.length);for(var n=0;n<t.length;n++)t[n].style.display="none";for(n=0;n<s.length;n++)s[n].classList.remove("dot_active");t[slideIndex-1].style.display="block",s[slideIndex-1].classList.add("dot_active")}showSlides(slideIndex);var $btnTop=$(".top-button");$btnTop.fadeOut(),$(window).on("scroll",(function(){$(window).scrollTop()>=20?$btnTop.fadeIn():$btnTop.fadeOut()})),$btnTop.on("click",(function(){$("html,body").animate({scrollTop:0},150)}));