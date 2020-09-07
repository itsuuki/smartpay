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
    // console.log(offsetX)
    // console.log(offsetY)
    // console.log(pageX)
    // console.log(pageY)
    // console.log(clientX)
    // console.log(clientY)
    // console.log()
  });


  $(function(){
    var targetElement = document.getElementById( "name" ) ;
    var clientRect = targetElement.getBoundingClientRect() ;
    console.log(clientRect);
   //  $("#right").on("click", function(){
   //    var sss = clientRect.right +1
   //    $('#name').css("transform: translateX", sss);
   //     $('#name').css("font-size", )
   //    console.log(sss)
   //  });
   // });
  $('.right').on('click',function(){
      console.log(clientRect.width)

      //   clientRect.right + 10;
      clientRect.width += 10;
      console.log(clientRect.width)
      $('#name').css('transform', "translateX("+ clientRect.width + 'px'+")");
  })
  
})


  $(document).click(function(e){
      const target_element = $(e.target);
    //   console.log(target_element.last().data().index)
    const id = target_element.last().data().index
    $.ajaxSetup({
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });
    $.ajax({
        type:'get',
        url:`/elem/${id}/`,
        data:{'id':id},

    })
    .done(function(response){
        console.log(response);
    })
  })
});

