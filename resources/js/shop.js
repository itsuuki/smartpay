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
    $('#name').css("color", $('#color-dialog').val())
  });

  function getId(ele){
    var attr = ele.getAttribute("id"); // input要素のid属性の値を取得
    console.log(attr); //「id01」
  }
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
  
  var zindex = 0;
  $(".puls").on("click", function(){
    zindex += 1
    $('#name').css("z-index", zindex);
    console.log(zindex)
  });

  $(".minus").on("click", function(){
    zindex -= 1
    $('#name').css("z-index", zindex);
    console.log(zindex)
  });

  // var zindex = 0;
  $(".pul").on("click", function(){
    zindex += 1
    $('#address').css("z-index", zindex);
    console.log(zindex)
  });

  $(".minu").on("click", function(){
    zindex -= 1
    $('#address').css("z-index", zindex);
    console.log(zindex)
  });

})

  function previewFile(file) {
    // プレビュー画像を追加する要素
    const preview = document.getElementById('preview');

    // FileReaderオブジェクトを作成
    const reader = new FileReader();

    // ファイルが読み込まれたときに実行する
    reader.onload = function (e) {
      const imageUrl = e.target.result; // 画像のURLはevent.target.resultで呼び出せる
      const img = document.createElement("img"); // img要素を作成
      img.src = imageUrl; // 画像のURLをimg要素にセット
      preview.appendChild(img); // #previewの中に追加
    }

    // いざファイルを読み込む
    reader.readAsDataURL(file);
  }


// <input>でファイルが選択されたときの処理
  const fileInput = document.getElementById('example');
  const handleFileSelect = () => {
    const files = fileInput.files;
    for (let i = 0; i < files.length; i++) {
      previewFile(files[i]);
    }
  }

  fileInput.addEventListener('change', handleFileSelect);


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


  //実用には、以下のスクリプトをEventListenerに登録して、何かしらのイベント時に動くようにする必要がある。
  // 選択範囲の背景を青くする
  // function blinkBlue(){
  // var sel = window.getSelection();
  // console.log(sel)
  // if(!sel.rangeCount) return; //範囲選択されている箇所がない場合は何もせず終了

  // var range = sel.getRangeAt(0);
  // var newNode = document.createElement('span');
  // newNode.setAttribute('style', 'background-color: blue;'); //範囲選択箇所の背景を青にする
  // newNode.innerHTML = sel.toString();
  // range.deleteContents();    // 範囲選択箇所を一旦削除
  // range.insertNode(newNode); // 範囲選択箇所の先頭から、修飾したspanを挿入
  // }

  // //実用にはEventListenerに登録して、何かしらのイベント時に動くようにする必要がある。
  // //以下では、仮に何かしらのキーが押された時に動くようにした。
  // window.addEventListener('keydown', blinkBlue)
});

