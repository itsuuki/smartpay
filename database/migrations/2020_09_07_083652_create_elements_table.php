<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateElementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('elements', function (Blueprint $table) {
            $table->id();
            $table->string('color_red');
            $table->string('color_blue');
            $table->string('color_green');
            $table->string('fontsize');
            $table->string('height');
            $table->string('width');
            $table->unsignedBigInteger(('first_id'));
            $table->foreign('first_id')->references('id')->on('firsts');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('elements');
    }
}
