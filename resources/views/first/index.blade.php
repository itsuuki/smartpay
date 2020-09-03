<html>
    <head></head>
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
