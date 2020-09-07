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


    public function create() {

        // $shops = First::all();
        return view('first/create');
    }

    public function store(Request $request) {

        // $shops = First::all();
        $value = new First;

        $value->name = $request->input('name');

        $value->number = $request->input('number');

        $value->address = $request->input('address');

        $value->user_id = $request->user()->id;

        $value->save();

        $shops = First::all();

        return view('first/index', ['shops'=>$shops]);
    }

    public function show($id) {
        $shop = First::find($id);

        return view('first.show',['shop'=>$shop]);


    }
}
