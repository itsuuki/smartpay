<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/','FirstController@index');
Route::get('/show/{id}','FirstController@show');
Route::get('/create','FirstController@create');
Route::post('First/store','FirstController@store');


Route::get('/home', 'HomeController@index')->name('home');
Route::resource('First', 'FirstController');