/*
const todos = [
  {
    id: 1,
    text: 'Buy Kleenex',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Lay on the floor',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Cry because JS is hard',
    isCompleted: false
  }
]
console.log(todos);
*/

$(function() {

  let $list = $('ul');
  let $newItemForm = $('#newItemForm');

  $newItemForm.on('submit', function(add) {
    add.preventDefault();
    let text = $('input[type="text"]').val();
    if (text == '') {
      alert('Enter a value please')
    } else {
    $list.append(`<li>${text}</li>`);
    $('input[type="text"]').val('');    
      
    }
  });

  $list.on('click', 'li', function() {
    let $this = $(this);
    $this.remove();
  });

});