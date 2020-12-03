params = "";

function addData(params) {
    var data = document.getElementsByTagName('img').getAttribute("src");
    var element = document.getElementsByTagName('img');
    for (var i = 0; i < data.length; i++) {
      element[i].setAttribute("src",params+data[i]);
    }
}
function ibg() {
  $each($('ibg'),function(index,val) {
    if($(this).find('img').length>0){
      $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
  })
}
