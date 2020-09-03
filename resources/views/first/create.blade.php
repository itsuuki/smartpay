@extends('layouts.app')
@section('content')
<div class="shop-main" id="shop-main">
<form method="POST" action="{{route('First.store')}}" enctype="multipart/form-data">
    {{ csrf_field() }}
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
            <div class="card mb-4">
              <div class="card-header">
    <label for="name">
        店名
    </label>
    <input
        id="name"
        name="name"
        class="name {{ $errors->has('name') ? 'is-invalid' : '' }}"
        value="{{ old('name') }}"
        type="text"
    >
    </div>
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
    </div>

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
</div>
</div>
</div>
@endsection