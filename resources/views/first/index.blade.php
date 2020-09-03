<html>
    <head>
        <script src="{{ asset('js/app.js') }}" defer></script>
        <script src="{{ asset('js/index.js') }}" defer></script>
    </head>
    <body>
        <div class="contents">
            <div class="names">
                @foreach($shops as $shop)
                    <div class="shop_name">
                        {{$shop->name}}
                    </div>
                @endforeach
            </div>
        </div>
    </body>

</html>
