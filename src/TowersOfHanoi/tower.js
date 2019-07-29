
'use strict';

$(document).ready(function() {
  let heldblock = null;

//Identifies the parent 'data-row' to be target of click function
  $('.data-row').click(function() {
    if (heldblock) {
      if (heldblock.data('value') < $(this).children().first().data('value')||
      $(this).children().length == 0) {
        $(this).prepend(heldblock);
      heldblock = null;
      }  

      $(this).prepend(block);
      heldblock = null;
    } else {
      heldblock = $(this).children().first().detach();
    console.log(heldblock.data('value'));
    }   
  })
})

// INSTRUCTIONS //
//1: 3 discs start on gray peg
//2: Ordered from smallest to largest disc
//3: Move discs to green peg
//4: Can only move 1 disc at a time
//5: Value of top disc < value of disc below it
//6: Value of bottom disc > value of disc above it

// OBJECTIVES //
//1: Cursor is empty, next click will detach child fom peg
//2: Cursor has child, next click will attach child to peg
//3: If bottom disc is greater value, can detach
//3b: else, disc cannot detach

