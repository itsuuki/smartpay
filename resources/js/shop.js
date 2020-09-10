$(function(){
  const buildFile = ()=> {
    const html = `
    <div class="addform">
      <input
      id="people"
      name="people"
      class="people"
      value=""
      type="text"
      >
    </div>`;
    return html;
  }
  $(".add-form").on("click", function(){
    $('#add-form').append(buildFile());
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


  var elem = document.getElementById('ranges');
  console.log(elem)
  var target = document.getElementById('values');
  var rangeValue = function (elem, target) {
    return function(evt){
      target.innerHTML = elem.value;
      $('#name').css("font-weight", target.innerHTML)
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

  $('.top').on('click',function(){
      // console.log(clientRect.width)
      clientRect.height -= 10;
      // console.log(clientRect.width)
      $('#name').css('transform', "translateY("+ clientRect.height + 'px'+") translateX("+ clientRect.width + 'px'+")");
  })

  $('.right').on('click',function(){
    // console.log(clientRect.width)
    clientRect.width += 10;
    // console.log(clientRect.width)
    $('#name').css('transform', "translateX("+ clientRect.width + 'px'+") translateY("+ clientRect.height + 'px'+")");
  })

  $('.bottom').on('click',function(){
    // console.log(clientRect.width)
    clientRect.height += 10;
    // console.log(clientRect.width)
    $('#name').css('transform', "translateY("+ clientRect.height + 'px'+") translateX("+ clientRect.width + 'px'+")");
  })

  $('.left').on('click',function(){
    // console.log(clientRect.width)
    clientRect.width -= 10;
    // console.log(clientRect.width)
    $('#name').css('transform', "translateX("+ clientRect.width + 'px'+") translateY("+ clientRect.height + 'px'+")");
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

