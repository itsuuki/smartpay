<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\First;

class FirstController extends Controller
{
    public function index() {

        $shops = First::all();
        return view('first/index',['shops'=>$shops]);
    }

    public function show($id) {
        $shop = First::find($id);

        return view('first.show',['shop'=>$shop]);

    }
}
