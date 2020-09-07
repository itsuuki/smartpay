$(function(){
 
  $("#name").on("click", function(){
    console.log("ok")
  });
  $("#color-dialog").on("change", function(){
    // var id =document.activeElement.blur()
    // console.log(id)
    $('#name').css("color", $('#color-dialog').val())
  });

  
  var elem = document.getElementById('range');
  console.log(elem)
  var target = document.getElementById('value');
  var rangeValue = function (elem, target) {
    return function(evt){
      target.innerHTML = elem.value;
      $('#name').css("font-size", target.innerHTML)
    }
  }
  elem.addEventListener('input', rangeValue(elem, target));


  let tag = document.getElementById('js-target');

  tag.addEventListener('click', function(e){
    let offsetX = e.offsetX; // =>要素左上からのx座標
    let offsetY = e.offsetY; // =>要素左上からのy座標
    let pageX = e.pageX; // =>ウィンドウ左上からのx座標
    let pageY = e.pageY; // =>ウィンドウ左上からのy座標
    let clientX = e.clientX; // =>ページ左上からのx座標
    let clientY = e.clientY; // =>ページ左上からのy座標
    console.log(offsetX)
    console.log(offsetY)
    console.log(pageX)
    console.log(pageY)
    console.log(clientX)
    console.log(clientY)
    // console.log()
  });
});