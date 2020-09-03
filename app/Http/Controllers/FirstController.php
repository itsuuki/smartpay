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
}
