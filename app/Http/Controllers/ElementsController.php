<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use phpDocumentor\Reflection\Element;
use App\Element;

class ElementsController extends Controller
{
    public function get(Request $reqeust){
        $elem = Element::find($reqeust->id);
        return $elem;
    }
}
