<link rel="stylesheet" href="{{ mix('css/shop.css') }}">
<script type="text/javascript" src="//code.jquery.com/jquery-3.5.0.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="{{ asset('/js/shop.js') }}" defer></script>

<div class="all">
  <div class="shop-main" id="shop-main">
  <form method="POST" action="{{route('First.store')}}" enctype="multipart/form-data">
      {{ csrf_field() }}
      <!-- <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-8">
              <div class="card mb-4">
                <div class="card-header"> -->
      <label for="name">
          店名
      </label>
      <div class="aa">
      <input
          id="name"
          name="name"
          class="name {{ $errors->has('name') ? 'is-invalid' : '' }}"
          value="{{ old('name') }}"
          type="text"
      >
      <!-- <button id="cha">表示変更</button> -->
      </div>
      <!-- </div> -->
      <div class="card-body">
        <p class="card-texts">

      <label for="number">
        電話番号  
      </label>
      <input
      id="number"
      name="number"
      class="number {{ $errors->has('number') ? 'is-invalid' : '' }}"
      value="{{ old('number') }}"
      type="text"
      >

      <label for="address">
        地域
      </label>
      <input
      id="address"
      name="address"
      class="address {{ $errors->has('address') ? 'is-invalid' : '' }}"
      value="{{ old('address') }}"
      type="text"
      >
      
      </p>
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
    <div id="js-target"></div>
  </div>
</div>
<!-- </div>
</div>
</div> -->
