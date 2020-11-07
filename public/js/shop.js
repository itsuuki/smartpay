/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/shop.js":
/*!******************************!*\
  !*** ./resources/js/shop.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  var buildFile = function buildFile() {
    var html = "\n    <div class=\"addform\">\n      <input\n      id=\"people\"\n      name=\"people\"\n      class=\"people\"\n      value=\"\"\n      type=\"text\"\n      >\n    </div>";
    return html;
  };

  $(".add-form").on("click", function () {
    $('#add-form').append(buildFile());
  });
  $("#color-dialog").on("change", function () {
    // var id =document.activeElement.blur()
    $('#name').css("color", $('#color-dialog').val());
  });

  function getId(ele) {
    var attr = ele.getAttribute("id"); // input要素のid属性の値を取得

    console.log(attr); //「id01」
  }

  var elem = document.getElementById('range');
  console.log(elem);
  var target = document.getElementById('value');

  var rangeValue = function rangeValue(elem, target) {
    return function (evt) {
      target.innerHTML = elem.value;
      $('#name').css("font-size", target.innerHTML);
    };
  };

  elem.addEventListener('input', rangeValue(elem, target));
  var elem = document.getElementById('ranges');
  console.log(elem);
  var target = document.getElementById('values');

  var rangeValue = function rangeValue(elem, target) {
    return function (evt) {
      target.innerHTML = elem.value;
      $('#name').css("font-weight", target.innerHTML);
    };
  };

  elem.addEventListener('input', rangeValue(elem, target));
  var tag = document.getElementById('js-target');
  tag.addEventListener('click', function (e) {
    var offsetX = e.offsetX; // =>要素左上からのx座標

    var offsetY = e.offsetY; // =>要素左上からのy座標

    var pageX = e.pageX; // =>ウィンドウ左上からのx座標

    var pageY = e.pageY; // =>ウィンドウ左上からのy座標

    var clientX = e.clientX; // =>ページ左上からのx座標

    var clientY = e.clientY; // =>ページ左上からのy座標
    // console.log(offsetX)
    // console.log(offsetY)
    // console.log(pageX)
    // console.log(pageY)
    // console.log(clientX)
    // console.log(clientY)
    // console.log()
  });
  $(function () {
    var targetElement = document.getElementById("name");
    var clientRect = targetElement.getBoundingClientRect();
    console.log(clientRect);
    $('.top').on('click', function () {
      // console.log(clientRect.width)
      clientRect.height -= 10; // console.log(clientRect.width)

      $('#name').css('transform', "translateY(" + clientRect.height + 'px' + ") translateX(" + clientRect.width + 'px' + ")");
    });
    $('.right').on('click', function () {
      // console.log(clientRect.width)
      clientRect.width += 10; // console.log(clientRect.width)

      $('#name').css('transform', "translateX(" + clientRect.width + 'px' + ") translateY(" + clientRect.height + 'px' + ")");
    });
    $('.bottom').on('click', function () {
      // console.log(clientRect.width)
      clientRect.height += 10; // console.log(clientRect.width)

      $('#name').css('transform', "translateY(" + clientRect.height + 'px' + ") translateX(" + clientRect.width + 'px' + ")");
    });
    $('.left').on('click', function () {
      // console.log(clientRect.width)
      clientRect.width -= 10; // console.log(clientRect.width)

      $('#name').css('transform', "translateX(" + clientRect.width + 'px' + ") translateY(" + clientRect.height + 'px' + ")");
    });
    var zindex = 0;
    $(".puls").on("click", function () {
      zindex += 1;
      $('#name').css("z-index", zindex);
      console.log(zindex);
    });
    $(".minus").on("click", function () {
      zindex -= 1;
      $('#name').css("z-index", zindex);
      console.log(zindex);
    }); // var zindex = 0;

    $(".pul").on("click", function () {
      zindex += 1;
      $('#address').css("z-index", zindex);
      console.log(zindex);
    });
    $(".minu").on("click", function () {
      zindex -= 1;
      $('#address').css("z-index", zindex);
      console.log(zindex);
    });
  });

  function previewFile(file) {
    // プレビュー画像を追加する要素
    var preview = document.getElementById('preview'); // FileReaderオブジェクトを作成

    var reader = new FileReader(); // ファイルが読み込まれたときに実行する

    reader.onload = function (e) {
      var imageUrl = e.target.result; // 画像のURLはevent.target.resultで呼び出せる

      var img = document.createElement("img"); // img要素を作成

      img.src = imageUrl; // 画像のURLをimg要素にセット

      preview.appendChild(img); // #previewの中に追加
    }; // いざファイルを読み込む


    reader.readAsDataURL(file);
  } // <input>でファイルが選択されたときの処理


  var fileInput = document.getElementById('example');

  var handleFileSelect = function handleFileSelect() {
    var files = fileInput.files;

    for (var i = 0; i < files.length; i++) {
      previewFile(files[i]);
    }
  };

  fileInput.addEventListener('change', handleFileSelect);
  $(document).click(function (e) {
    var target_element = $(e.target); //   console.log(target_element.last().data().index)

    var id = target_element.last().data().index;
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    });
    $.ajax({
      type: 'get',
      url: "/elem/".concat(id, "/"),
      data: {
        'id': id
      }
    }).done(function (response) {
      console.log(response);
    });
  }); //実用には、以下のスクリプトをEventListenerに登録して、何かしらのイベント時に動くようにする必要がある。
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

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi ./resources/js/shop.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\wi031\Desktop\laravel\smartpay\resources\js\shop.js */"./resources/js/shop.js");


/***/ })

/******/ });