<link rel="stylesheet" href="{{ mix('css/shop.css') }}">
<script type="text/javascript" src="//code.jquery.com/jquery-3.5.0.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="{{ asset('/js/shop.js') }}" defer></script>

<div class="all">
  <div class="shop-main" id="shop-main">
  <form method="POST" action="{{route('First.store')}}" enctype="multipart/form-data">
      {{ csrf_field() }}
      <input type="hidden" name="user_id" value="{{$user->id}}">
      <!-- <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-8">
              <div class="card mb-4">
                <div class="card-header"> -->
      <label for="name">
          店名
      </label>
      <!-- <div class="aa" id="aa"> -->
      <div class="shop_culum_1" id="shop_culum_1">
      <input
          id="name"
          name="name"
          class="name {{ $errors->has('name') ? 'is-invalid' : '' }}"
          value="{{ old('name') }}"
          type="text"
          onclick="getId(this);"
      >
      <!-- <button id="cha">表示変更</button> -->
      </div>
      <!-- </div> -->
      <div class="card-body">
        <p class="card-texts">

      <label for="number">
        電話番号
      </label>
      <div class="shop_culum_2" id="shop_culum_2">
      <input
      id="number"
      name="number"
      class="number {{ $errors->has('number') ? 'is-invalid' : '' }}"
      value="{{ old('number') }}"
      type="text"
      onclick="getId(this);"
      >
      </div>

      <label for="address">
        地域
      </label>
      <div class="shop_culum_3" id="shop_culum_3">
      <input
      id="address"
      name="address"
      class="address {{ $errors->has('address') ? 'is-invalid' : '' }}"
      value="{{ old('address') }}"
      type="text"
      onclick="getId(this);"
      >
      </div>

      </p>

      <div class="file-cla">
        <input type="file" class="file-cla" id="example">
      </div>
      <div id="preview"></div>
      <div class="element" data-index="8">
          要素1<input type="text">

      </div>
      <div class="element" data-index="9">
          要素2<input type="text">
      </div>
      <div  id="add-form">
      </div>
      </div>
      <!-- </div> -->

      <div class="mt-5">
          <a class="btn btn-secondary" href="/">
              キャンセル
          </a>

          <button type="submit" class="btn btn-primary">
              登録する
          </button>
      </div>
  </form>
  </div>
  <!-- </div> -->
  <div class="side">
    <div style="float: left;width: 150px;">
      <label id="label1">list属性なし</label></br></br>
      <input id="color-dialog" type="color" value="#ffffff"></br></br>
      <!-- 選択値 ： <span id="area1"></span> -->
    </div>
    <label>
      大きさを選択：<input type="range" id="range" min="0" max="100" step="1" value="50">
    </label>
    <span id="value">50</span>
    <label>
      太さを選択：<input type="range" id="ranges" min="400" max="900" step="100" value="400">
    </label>
    <span id="values">400</span>
    <div id="js-target"></div>
    <button class="top" id="top">上</button>
    <button class="right" id="right">右</button>
    <button class="bottom" id="bottom">下</button>
    <button class="left" id="left">左</button>
    <button class="add-form">
      新規フォーム追加
    </button>
    <button class="puls" id="puls">+</button>
    <button class="minus" id="minus">-</button>
    <button class="pul" id="puls">+</button>
    <button class="minu" id="minus">-</button>
  </div>
</div>
<!-- </div>
</div>
</div> -->
